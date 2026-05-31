import { Context } from 'hono'

export function getAuthUser(c: Context) {
    return c.get('user') as {
        id: number
    }
}