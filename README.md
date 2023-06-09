Clonar repositorio UPBack https://github.com/gioiamicaela/UPBack.
Hacer npm i en la consola (fijarse de estar bien posicionado en la ruta).
Correr en la terminal "nodemon server.js" (si es que tienen instalado nodemon, sino hacerlo como de costumbre).
Tener instalado MongoDB.
Instalar Mongoose.
Completar el .env siguiendo el .env.example:
JWT_SECRET=
APP_PORT=
MONGODB_CONNECTION_URL=mongodb://localhost:27017/UP
En el caso de MONGODB_CONNECTION_URL copio como ejemplo mi conexión. El “/UP” es importante para que cree la DB.

Clonar repositorio UPFront https://github.com/gioiamicaela/UPFront.
Hacer npm i en la consola (fijarse de estar bien posicionado en la ruta).
Una vez dentro de la carpeta prueba hacer "npm start".

Nota: para usar la app, tanto el front como el back, tienen que estar corriendo.
