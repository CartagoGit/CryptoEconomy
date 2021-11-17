# CryptoEconomy

Proyecto para crear una aplicación de escritorio para guardar y tener un registro de operaciones con cryptos.

## Comandos para la instalación de dependencias

1. npx create-react-app nombre-aplicacion
2. cd nombre-aplicacion
3. npm i -D electron@latest electron-builder
4. npm i -D wait-on concurrently
5. npm i -D electron-is-dev

### Tambien podriamos instalarlo por yarn

1. npx create-react-app nombre-aplicacion
2. cd nombre-aplicacion
3. yarn global add electron@latest
4. yarn add electron electron-builder --dev
5. yarn add wait-on concurrently --dev
6. yarn add electron-is-dev

## Añadimos en el archivo package.json, en la sección de scripts la siguiente linea

`
"electron-dev": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron .\""
`

## Agregamos al package.json

`
"main": "public/electron.js",
`

### Y el package.json tendrá que quedar como el siguiente ejemplo

```{
  "name": "electron-react",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "electron-is-dev": "^1.0.1",
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-scripts": "2.1.5"
  },
  "main": "public/electron.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "electron-dev": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron .\""
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "devDependencies": {
    "concurrently": "^4.1.0",
    "electron": "^4.0.6",
    "electron-builder": "^20.38.5",
    "wait-on": "^3.2.0"
  }
}```
