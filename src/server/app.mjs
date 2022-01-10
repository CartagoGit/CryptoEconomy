import express from "express";
import morgan from "morgan";
import { router } from "./routes/root.routes.mjs";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(router);

export const getApp = () => app;
