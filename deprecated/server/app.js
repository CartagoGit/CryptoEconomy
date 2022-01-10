const express = require("express");
const morgan = require("morgan");

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(require("./routes/prueba.routes.js"));

module.exports = app;
