# Cashi API REST

Vídeo Demostrativo: https://www.youtube.com/watch?v=d1m3LgOIbmk

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

Características:

- API REST funcional con métodos HTTP
- Migraciones mediante Prisma y conexión a base de datos con PostgreSQL y Docker
- Autenticación mediante JWT
- Registro e inicio de sesión de usuarios
- Contraseñas almacenadas mediante hash con bcrypt
- CRUD completo de categorías y trnasacciones, autenticadas y asociadas a usuarios.
- Subida de comprobantes

Instrucciones:

- Dirigirse al directorio *cd (Directorio)*
- Instalar las dependencias con *npm install*
- Mediante Git Bash copiar el .env.example a un .env con *cp .env.example .env*
- Levantar PostgreSQL con Docker Desktop y usando *docker compose up -d*
- Ejecutar migraciones Prisma usando *npx prisma migrate dev*
- Ejecutar la API con *npm run dev*
- Comprobar los endpoints en Bruno

Uso de IA:

> Mediante *ChatGPT* le solicité la creación asistida del JWT, middleware, y la modificación del schema.prisma para agregar la tabla usuario y modificar la de transacciones, así como el solucionar errores generales en el código por no haber ordenado correctamente ciertas líneas o componentes.