import { z } from 'zod'

export const createTransactionSchema = z.object({
  amount: z
    .number()
    .positive('El monto de las transacciones debe ser siempre positivo.'),

  type: z.enum(['income', 'expense']),

  description: z.string().max(255).optional(),

  date: z.coerce.date(),

  receiptUrl: z.string().optional(),

  latitude: z.number().min(-90).max(90).optional(),

  longitude: z.number().min(-180).max(180).optional(),

  categoryId: z.number().int().positive(),
})

export const updateTransactionSchema =
  createTransactionSchema.partial()

export type CreateTransactionDTO =
  z.infer<typeof createTransactionSchema>

export type UpdateTransactionDTO =
  z.infer<typeof updateTransactionSchema>