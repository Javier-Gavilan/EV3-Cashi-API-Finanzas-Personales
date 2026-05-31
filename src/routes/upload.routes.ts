import { Hono } from 'hono'

import { authMiddleware }
  from '../middlewares/auth.middleware'

import { uploadController }
  from '../controllers/upload.controller'

export const uploadRoutes =
  new Hono()

uploadRoutes.use(
  '*',
  authMiddleware
)

uploadRoutes.post(
  '/',
  uploadController.uploadReceipt
)