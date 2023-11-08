# Tokenizador de Tarjetas de Credito


> API para tokenizar los datos de la tarjeta de credito 

## Instalacion y Ejecucion con Docker Compose
Se requiere tener instalado
* Docker
* Docker Compose

```sh
docker-compose up
```

## Uso en modo desarrollo
Se requiere tener instalado
* MongoDB
* NodeJS


Debe modificar la variable **MONGODB_URI** con el valor de la url de conexion de su instalacion local de mongoDB 
```sh
npm run install
npm run dev
```

## Ejecutar Test

```sh
npm run test
```
## Demostracion
Se envia al endpoint POST **/api/v1/creditCard/GenerarToken** los siguientes datos en le body
```json
{
    "email": "madauto07@gmail.com",
    "expiration_year": "2023",
    "expiration_month": "12",
    "cvv": "123",
    "card_number": "51111111111111"
}
```
![Token de Tarjeta de Credito](https://github.com/madauto07/prueba-culqi-node/blob/main/imgs/generarToken.png?raw=true)

Ahora usamos el metodo POST **/api/v1/creditCard/verificarToken**
y enviamos el token por el Header de tipo Bearer
![Verificacion de Token](https://github.com/madauto07/prueba-culqi-node/blob/main/imgs/verificarToken.png?raw=true)

## Author

👤 **Miguel Adauto**



* LinkedIn: [@https:\/\/www.linkedin.com\/in\/migueladauto\/](https://www.linkedin.com/in/migueladauto\/)

