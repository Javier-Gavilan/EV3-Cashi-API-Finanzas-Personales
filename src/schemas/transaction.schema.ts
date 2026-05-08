import { z } from 'zod'

export const createTransactionSchema = z.object({
  amount: z
    .number()
    .positive('El monto de las transacciones debe ser siempre positivo.'),

  type: z.enum(['income', 'expense']),

  description: z
    .string()
    .max(255)
    .optional(),

  date: z.coerce.date(),

  categoryId: z.number().int().positive(),
})

export const updateTransactionSchema =
  createTransactionSchema.partial()

export type CreateTransactionDTO =
  z.infer<typeof createTransactionSchema>

export type UpdateTransactionDTO =
  z.infer<typeof updateTransactionSchema>