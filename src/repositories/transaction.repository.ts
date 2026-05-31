import { prisma } from '../lib/prisma'

import {
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from '../schemas/transaction.schema'

export const transactionRepository = {
  findAll() {
    return prisma.transaction.findMany({
      include: {
        category: true,
      },

      orderBy: {
        id: 'desc',
      },
    })
  },

  findById(id: number) {
    return prisma.transaction.findUnique({
      where: { id },

      include: {
        category: true,
      },
    })
  },

  findAllByUser(userId: number) {
    return prisma.transaction.findMany({
      where: {
        userId,
      },

      include: {
        category: true,
      },

      orderBy: {
        id: 'desc',
      },
    })
  },

  create(data: CreateTransactionDTO & {
    userId: number
  }) {
    return prisma.transaction.create({
      data,
    })
  },

  update(id: number, data: UpdateTransactionDTO) {
    return prisma.transaction.update({
      where: { id },
      data,
    })
  },

  delete(id: number) {
    return prisma.transaction.delete({
      where: { id },
    })
  },
}