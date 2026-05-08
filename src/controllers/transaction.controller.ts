import { Context } from 'hono'

import { transactionRepository } from '../repositories/transaction.repository'
import { categoryRepository } from '../repositories/category.repository'

import {
  createTransactionSchema,
  updateTransactionSchema,
} from '../schemas/transaction.schema'

export const transactionController = {
  async getAll(c: Context) {
    const transactions =
      await transactionRepository.findAll()

    return c.json(transactions)
  },

  async getById(c: Context) {
    const id = Number(c.req.param('id'))

    const transaction =
      await transactionRepository.findById(id)

    if (!transaction) {
      return c.json(
        { message: 'Transacción no encontrada' },
        404
      )
    }

    return c.json(transaction)
  },

  async create(c: Context) {
    const body = await c.req.json()

    const validatedData =
      createTransactionSchema.parse(body)

    const category =
      await categoryRepository.findById(
        validatedData.categoryId
      )

    if (!category) {
      return c.json(
        { message: 'Categoría no encontrada' },
        404
      )
    }

    const transaction =
      await transactionRepository.create(
        validatedData
      )

    return c.json(transaction, 201)
  },

  async update(c: Context) {
    const id = Number(c.req.param('id'))

    const body = await c.req.json()

    const validatedData =
      updateTransactionSchema.parse(body)

    const existingTransaction =
      await transactionRepository.findById(id)

    if (!existingTransaction) {
      return c.json(
        { message: 'Transacción no encontrada' },
        404
      )
    }

    if (validatedData.categoryId) {
      const category =
        await categoryRepository.findById(
          validatedData.categoryId
        )

      if (!category) {
        return c.json(
          { message: 'Categoría no encontrada' },
          404
        )
      }
    }

    const updatedTransaction =
      await transactionRepository.update(
        id,
        validatedData
      )

    return c.json(updatedTransaction)
  },

  async delete(c: Context) {
    const id = Number(c.req.param('id'))

    const existingTransaction =
      await transactionRepository.findById(id)

    if (!existingTransaction) {
      return c.json(
        { message: 'Transacción no encontrada' },
        404
      )
    }

    await transactionRepository.delete(id)

    return c.body(null, 204)
  },

  async getBalance(c: Context) {
    const transactions =
      await transactionRepository.findAll()

    const totalIncome = transactions
      .filter(
        (transaction) =>
          transaction.type === 'income'
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.amount,
        0
      )

    const totalExpense = transactions
      .filter(
        (transaction) =>
          transaction.type === 'expense'
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.amount,
        0
      )

    const balance =
      totalIncome - totalExpense

    return c.json({
      totalIncome,
      totalExpense,
      balance,
    })
  },
}