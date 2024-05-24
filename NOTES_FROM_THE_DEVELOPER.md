

## Database

"db" folder contains a creation DUMP file of the database. It has 3 tables:

- Productos (requested)
- Fabrica (requested)
- Users: needed for the authentication process

Users tables include a test user that can be used for testing

## Endpoints

- GET /health: Check if API server is running

- GET /productos/byFabrica: fullfuill requirement number 2
- POST /productos: fullfill requirement number 3
- DELETE / productos/:id : fullfill requirement number 4

Auth endpoint solve requirement number 

- POST /auth/login: Authenticate a registered user, returning a valid access token
- POST /auth/register: register a new user to the application

## Docker

"docker-composer.yml" file creates a cointainer with both the MySql database and the API Server.

Mysql database is initialize with the Database schema at "db" folder.

NOTE: the configuration file is a WIP. At the moment, the container image is succefully created, it can be executed and both services are initialize. Conteiner IS NOT READY FOR USE because API SERVER service cannot reach the Mysql database.


## ENV config file

This file can be use for running the application in standalone mode or by the use of the docker container.

- MYSQLDB_HOST: IP or domain where the MySQL server is running
- MYSQLDB_PORT: MySql listening pport

- MYSQLDB_ROOT_PASSWORD: Password required at MySQL Server creation. Needed in docker container creation
- MYSQLDB_USER: MySQL service user
- MYSQLDB_PASS=MySQL service user password

- MYSQLDB_DATABASE: Database name

- APP_PORT: Application listening port
- JWT_SECRET: secure key needed for token generation and validation