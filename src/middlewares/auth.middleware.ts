import { createMiddleware } from 'hono/factory'

import { verifyToken } from '../lib/jwt'

export const authMiddleware =
    createMiddleware(async (c, next) => {
        const authorization =
            c.req.header('Authorization')

        if (!authorization) {
            return c.json(
                {
                    message: 'Unauthorized',
                },
                401
            )
        }

        const [scheme, token] =
            authorization.split(' ')

        if (
            scheme !== 'Bearer' ||
            !token
        ) {
            return c.json(
                {
                    message: 'Invalid token format',
                },
                401
            )
        }

        try {
            const payload =
                verifyToken(token)

            c.set('user', {
                id: payload.userId,
            })

            await next()
        } catch {
            return c.json(
                {
                    message: 'Invalid token',
                },
                401
            )
        }
    })