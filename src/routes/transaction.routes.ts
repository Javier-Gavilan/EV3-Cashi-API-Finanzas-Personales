import { Hono } from 'hono'

import { transactionController } from '../controllers/transaction.controller'

export const transactionRoutes = new Hono()

transactionRoutes.get(
  '/',
  transactionController.getAll
)

transactionRoutes.get(
  '/balance',
  transactionController.getBalance
)

transactionRoutes.get(
  '/:id',
  transactionController.getById
)

transactionRoutes.post(
  '/',
  transactionController.create
)

transactionRoutes.patch(
  '/:id',
  transactionController.update
)

transactionRoutes.delete(
  '/:id',
  transactionController.delete
)