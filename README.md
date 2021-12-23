# CryptoEconomy

Proyecto para crear una aplicación de escritorio adaptable a web con electron y react para guardar y tener un registro de operaciones con cryptos

## Comandos y dependencias usadas

1.`yarn create create-react-app@latest cryptoeconomy` - Para crear la app de react

2.`yarn add electron-builder --dev` - Añadir la dependencia de electron

3.`yarn add electron-builder@latest --dev` - Añadir la dependencia para hacer Builds de eletron

4.`yarn add electron-is-dev@latest` - Añadir la dependencia para facilitar la deteccion de desarrollo y produccion en electron

5.`yarn add concurrently@latest --dev` - Añadir la dependencia para permitir multiples comandos en el script de inicio

6.`yarn add wait-on --dev` - Añadir la dependencia para permitir la espera al inicio del localhost:3000 de react antes de lanzar la aplicacion

7.`yarn add electron-devtools-installer@latest` - Añadir dependencia para poder añadir los devTools de Redux y de React

8.`yarn add electronmon@latest --dev` - Dependencia similar a nodemon para permitir ver y recargar la aplicacion de electron

9.`yarn add cross-env@latest -dev` - Dependencia para correr scripts y usar variables a traves de diferentes plataformas haciendolas compatibles entre win, linux y mac

10.`yarn add @types/node@latest --dev` - Dependencia para añadir el tipado para modulos

11.`yarn add electron-prebuilt-compile@latest --dev` - Dependencia para cargar ES6+React+Less entre otros lenguajes en electron

12.`yarn add redux@latest react-redux@latest thunk@latest` Instalamos redux, react-redux y el middleware thunk para usarlos junto a react

13.`yarn add electron-alert@latest` electron-alert para usar alertas de sweetalert2 en el main de lectron

14.`yarn add @types/electron-alert@latest --dev` tipado para las alertas

15.`yarn add sweetalert2@latest` Dependencia para los modales

16.`yarn add sass@latest` Para incorporar sass en React

17.`yarn add uuid@latest` Para crear ids unicos y aleatorios

18.`yarn add moment@latest` Para trabajar con fechas

### Opcional Para Colgar el trabajo en sitios distribuidos para que puedan usarlo otras personas: `yarn create @electron-forge/cli import`

### [https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/] Un tutorial para iniciar en Electron

### [https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e] Otro tutorial para iniciar en Electron
