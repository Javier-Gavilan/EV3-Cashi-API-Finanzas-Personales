import { Context } from 'hono'
import { categoryRepository } from '../repositories/category.repository'
import {
  createCategorySchema,
  updateCategorySchema,
} from '../schemas/category.schema'

export const categoryController = {
  async getAll(c: Context) {
    const categories = await categoryRepository.findAll()

    return c.json(categories)
  },

  async getById(c: Context) {
    const id = Number(c.req.param('id'))

    const category = await categoryRepository.findById(id)

    if (!category) {
      return c.json(
        { message: 'Categoría no encontrada' },
        404
      )
    }

    return c.json(category)
  },

  async create(c: Context) {
    const body = await c.req.json()

    const validatedData =
      createCategorySchema.parse(body)

    const category =
      await categoryRepository.create(validatedData)

    return c.json(category, 201)
  },

  async update(c: Context) {
    const id = Number(c.req.param('id'))

    const body = await c.req.json()

    const validatedData =
      updateCategorySchema.parse(body)

    const existingCategory =
      await categoryRepository.findById(id)

    if (!existingCategory) {
      return c.json(
        { message: 'Categoría no encontrada' },
        404
      )
    }

    const updatedCategory =
      await categoryRepository.update(
        id,
        validatedData
      )

    return c.json(updatedCategory)
  },

  async delete(c: Context) {
    const id = Number(c.req.param('id'))

    const existingCategory =
      await categoryRepository.findById(id)

    if (!existingCategory) {
      return c.json(
        { message: 'Categoría no encontrada' },
        404
      )
    }

    await categoryRepository.delete(id)

    return c.body(null, 204)
  },
}