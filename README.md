# Southern Code Challenge
### Instrucciones
 * Descargar o clonar el repositorio
 * Crear un archivo .env en la raiz con esta estructura (token se usa para la api [Tmbd](https://developer.themoviedb.org/docs/getting-started)) 
```plaintext
PORT=4200
DB_DATABASE=SOUTHERN
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=contrasenia
DB_PORT=5432
TOKEN=
```
 * Instalar las dependencias
 ```plaintext
npm install
```
* Tener configurada una base de datos en postgres o si tiene docker ejecutar en la carpeta principal
 ```plaintext
docker-compose up -d database
```
* Realizar las migraciones
 ```plaintext
npm run migrations:run
```
* Por ultimo corra la app
```plaintext
npm run start
```
Si siguio todos los pasos podra acceder directamente a la documentación por medio de esta url http://localhost:4200/swagger
(Teniendo en cuenta que no se haya modificada el archivo .env)
