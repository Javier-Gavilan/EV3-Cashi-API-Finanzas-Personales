import { Hono } from 'hono'
import { categoryController } from '../controllers/category.controller'
import { authMiddleware } from '../middlewares/auth.middleware'

export const categoryRoutes = new Hono()

categoryRoutes.use('*', authMiddleware)

categoryRoutes.get(
  '/',
  categoryController.getAll
)

categoryRoutes.get(
  '/:id',
  categoryController.getById
)

categoryRoutes.post(
  '/',
  categoryController.create
)

categoryRoutes.patch(
  '/:id',
  categoryController.update
)

categoryRoutes.delete(
  '/:id',
  categoryController.delete
)