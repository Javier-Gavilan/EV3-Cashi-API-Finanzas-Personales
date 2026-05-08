import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { categoryRoutes } from './routes/category.routes'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'Cashi API',
  })
})

app.route('/categories', categoryRoutes)

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('http://localhost:3000')