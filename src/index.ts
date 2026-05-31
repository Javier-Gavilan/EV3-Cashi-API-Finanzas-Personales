import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import { categoryRoutes } from './routes/category.routes'
import { transactionRoutes } from './routes/transaction.routes'
import { authRoutes } from './routes/auth.routes'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'Cashi API',
  })
})

app.route('/categories', categoryRoutes)
app.route('/transactions', transactionRoutes)
app.route('/auth', authRoutes)

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('http://localhost:3000')