import { Context } from 'hono'

import fs from 'fs/promises'
import path from 'path'

import crypto from 'crypto'

import {
    ALLOWED_MIME_TYPES,
    MAX_FILE_SIZE,
} from '../schemas/upload.schema'

export const uploadController = {
    async uploadReceipt(c: Context) {
        const formData =
            await c.req.formData()

        const file =
            formData.get('receipt')

        if (!(file instanceof File)) {
            return c.json(
                {
                    message:
                        'Se requiere un archivo del recibo',
                },
                400
            )
        }

        if (
            !ALLOWED_MIME_TYPES.includes(
                file.type
            )
        ) {
            return c.json(
                {
                    message:
                        'Solo se permiten archivos JPEG, PNG y WebP',
                },
                400
            )
        }

        if (file.size > MAX_FILE_SIZE) {
            return c.json(
                {
                    message:
                        'El tamaño máximo del archivo debe ser de 5MB',
                },
                400
            )
        }

        const extension =
            file.name.split('.').pop()

        const filename =
            `${crypto.randomUUID()}.${extension}`

        const uploadPath = path.join(
            process.cwd(),
            'uploads',
            filename
        )

        const buffer =
            Buffer.from(
                await file.arrayBuffer()
            )

        await fs.writeFile(
            uploadPath,
            buffer
        )

        return c.json({
            receiptUrl:
                `/uploads/${filename}`,
        })
    },
}