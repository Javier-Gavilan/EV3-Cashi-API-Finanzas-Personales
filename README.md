# Cashi API REST

Vídeo Demostrativo:
> OBS me dejó de funcionar y me lanza varios errores, así que no he podido grabar la explicación del código y no tengo otro programa de confianza para realizar la grabación. Solo se me ha ocurrido dejar la explicación general y las pruebas a realizar en Bruno en el README. Lamento las molestias.

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

Explicación General:

Se implementó la tabla de Usuarios en *schema.prisma* y se actualizó la de Transacciones para implementar los nuevos cambios, aplicando un migrate reset para reiniciar la base de datos y que no hayan problemas en las tablas. Esto para posteriormente aplicar que las transacciones pertenezcan a usuarios en específico y sean exclusivas de estos. Con esto también se implementaron campos opcionales para almacenar la URL de un comprobante que se almacenará en *uploads/* así como las coordenadas geográficas asociadas a cada transacción.

La autenticación se implementó mediante dos endpoints:
> POST /auth/register
> POST /auth/login
Durante el registro, la contraseña no se almacenará en texto plano, sino que antes de guardarse en la base de datos será hasheada mediante el *bcrypt*. Cuando un usuario sea logeado correctamente, la API generará un *JWT (JSON Web Token)* que identicará a dicho usuario. El middleware interceptará todas las solicitudes protegidas y verificará que existe un token válido en el encabezado. Si el token es válido, la información quedará disponible para el usuario. En caso contrario, la solicitud será rechazada.

Una vez autenticado, el usuario solo podrá acceder a sus propias transacciones mediante su token personal, impidiendo el acceso a información de otros usuarios. Con esto, el balance de las transacciones únicamente contemplará las pertenecientes a dicho usuario.

Por último, mediante el método:
> POST /transactions/upload
usando el formato Multipart Form, y con las validaciones básicas de formato y tamaño en schema, se generará un nombre único del archivo y se almacenará en *uploads*.


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