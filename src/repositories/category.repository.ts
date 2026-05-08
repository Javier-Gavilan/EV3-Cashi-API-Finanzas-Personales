import { prisma } from '../lib/prisma'
import {
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from '../schemas/category.schema'

export const categoryRepository = {
  findAll() {
    return prisma.category.findMany({
      orderBy: {
        id: 'asc',
      },
    })
  },

  findById(id: number) {
    return prisma.category.findUnique({
      where: { id },
    })
  },

  create(data: CreateCategoryDTO) {
    return prisma.category.create({
      data,
    })
  },

  update(id: number, data: UpdateCategoryDTO) {
    return prisma.category.update({
      where: { id },
      data,
    })
  },

  delete(id: number) {
    return prisma.category.delete({
      where: { id },
    })
  },
}