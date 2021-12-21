# CryptoEconomy

Proyecto para crear una aplicación de escritorio adaptable a web con electron y react para guardar y tener un registro de operaciones con cryptos

## Comandos y dependencias usadas

1.`yarn create create-react-app@latest cryptoeconomy` - Para crear la app de react

2.`yarn add electron-builder --dev` - Añadir la dependencia de electron

3.`yarn add electron-builder@latest --dev` - Añadir la dependencia para hacer Builds de eletron

4.`yarn add electron-is-dev@latest` - Añadir la dependencia para facilitar la deteccion de desarrollo y produccion en electron

5.`yarn add concurrently@latest --dev` - Añadir la dependencia para permitir multiples comandos en el script de inicio

6.`yarn add wait-on --dev` - Añadir la dependencia para permitir la espera al inicio del localhost:3000 de react antes de lanzar la aplicacion

7.`yarn add electron-devtools-installer@latest --dev` - Añadir dependencia para poder añadir los devTools de Redux y de React

8.`yarn add electronmon@latest --dev` - Dependencia similar a nodemon para permitir ver y recargar la aplicacion de electron

9.`yarn add cross-env@latest -dev` - Dependencia para correr scripts y usar variables a traves de diferentes plataformas haciendolas compatibles entre win, linux y mac

10.`yarn add @types/node@latest --dev` - Dependencia para añadir el tipado para modulos

### Opcional Para Colgar el trabajo en sitios distribuidos para que puedan usarlo otras personas: `yarn create @electron-forge/cli import`
