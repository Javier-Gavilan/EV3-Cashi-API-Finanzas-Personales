# Cashi API REST

Vídeo Demostrativo: https://www.youtube.com/watch?v=d1m3LgOIbmk

API REST hecha y trabajada con:

- TypeScript
- Node.js
- Docker
- Prisma
- PostgreSQL

Características:

- API REST funcional con métodos HTTP
- Migraciones mediante Prisma y conexión a base de datos con PostgreSQL y Docker
- CRUD funcional para categorías y transacciones
- Cálculo de balance funcional

Instrucciones:

- Dirigirse al directorio *cd (Directorio)*
- Instalar las dependencias con *npm install*
- Mediante Git Bash copiar el .env.example a un .env con *cp .env.example .env*
- Levantar PostgreSQL con Docker Desktop y usando *docker compose up -d*
- Ejecutar migraciones Prisma usando *npx prisma migrate dev*
- Ejecutar la API con *npm run dev*
- Comprobar los endpoints en Bruno

Uso de IA:

> Mediante *ChatGPT* le solicité la creación del contenido de tsconfig.json y docker.compose.yml, además de los scripts de package.json. Por su recomendación también cambié la versión de Prisma de 7 a 6 por incompatibilidades que tenía en los comandos y por temas de estabilidad. También le solicité ayuda con las instrucciones para levantar el programa, principalmente para entender el funcionamiento de Docker y la creación del .env e implementación del .env.example para copiarlo directamente. Por último le solicité ayuda para la estructuración básica del código, con las carpetas y archivos que deben estar dentro de /src.