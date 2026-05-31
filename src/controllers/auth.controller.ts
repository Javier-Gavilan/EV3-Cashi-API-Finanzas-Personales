import { Context } from 'hono'
import bcrypt from 'bcryptjs'

import { authRepository } from '../repositories/auth.repository'

import {
    registerSchema,
    loginSchema,
} from '../schemas/auth.schema'

import { generateToken } from '../lib/jwt'

export const authController = {
    async register(c: Context) {
        const body = await c.req.json()

        const data = registerSchema.parse(body)

        const existingUser =
            await authRepository.findByEmail(data.email)

        if (existingUser) {
            return c.json(
                {
                    message: 'Correo ya registrado',
                },
                409
            )
        }

        const passwordHash =
            await bcrypt.hash(data.password, 10)

        const user =
            await authRepository.create(
                data.email,
                passwordHash
            )

        const token = generateToken(user.id)

        return c.json(
            {
                token,
            },
            201
        )
    },

    async login(c: Context) {
        const body = await c.req.json()

        const data = loginSchema.parse(body)

        const user =
            await authRepository.findByEmail(data.email)

        if (!user) {
            return c.json(
                {
                    message: 'Credenciales inválidas',
                },
                401
            )
        }

        const validPassword =
            await bcrypt.compare(
                data.password,
                user.passwordHash
            )

        if (!validPassword) {
            return c.json(
                {
                    message: 'Credenciales inválidas',
                },
                401
            )
        }

        const token = generateToken(user.id)

        return c.json({
            token,
        })
    },
}