# Cashi API REST

Vídeo Demostrativo: https://www.youtube.com/watch?v=udK1fiqCy2E

API REST hecha y trabajada con:

- TypeScript
- Node.js
- Docker
- Hono
- Prisma
- PostgreSQL
- Zod
- JWT
- bcrypt.js
- Render

Características:

- API REST funcional con métodos HTTP
- Migraciones mediante Prisma y conexión a base de datos con PostgreSQL con despliegue en Render
- Autenticación mediante JWT
- Registro e inicio de sesión de usuarios
- Contraseñas almacenadas mediante hash con bcrypt
- CRUD completo de categorías y trnasacciones, autenticadas y asociadas a usuarios.
- Subida de comprobantes

API desplegada:

> La API se encuentra actualmente desplegada en: https://cashi-api-un4v.onrender.com/
> Los endpoints pueden probarse con Bruno.

Instrucciones (Ejecución local):

- Dirigirse al directorio *cd (Directorio)*
- Instalar las dependencias con *npm install*
- Mediante Git Bash copiar el .env.example a un .env con *cp .env.example .env*
- Levantar PostgreSQL con Docker Desktop y usando *docker compose up -d*
- Ejecutar migraciones Prisma usando *npx prisma migrate dev*
- Ejecutar la API con *npm run dev*
- Comprobar los endpoints en Bruno

Uso de IA:

> Mediante *ChatGPT* le solicité la modificación de package.json y tsconfig.json para adaptar el proyecto a su despliegue en Render, así como el cambio de uso de *uuid* a *crypto*¨en el archivo *upload.controller.ts* debido a cambios de commonjs para evitar problemas con el proyecto. También le pedí ayuda para corregir problemas de servidor que me encontré al momento de subir los recibos al no haber actualizado correctamente el repositorio.