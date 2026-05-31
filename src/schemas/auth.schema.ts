import { z } from 'zod'

export const registerSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, 'La contraseña debe contener al menos 8 caracteres'),
})

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
})

export type RegisterDTO = z.infer<typeof registerSchema>
export type LoginDTO = z.infer<typeof loginSchema>