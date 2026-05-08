import { z } from 'zod'

export const createCategorySchema = z.object({
  name: z
    .string()
    .min(1, 'Es requerido un nombre para la categoría')
    .max(100, 'El nombre de la categoría es demasiado largo'),
})

export const updateCategorySchema = createCategorySchema.partial()

export type CreateCategoryDTO = z.infer<typeof createCategorySchema>
export type UpdateCategoryDTO = z.infer<typeof updateCategorySchema>