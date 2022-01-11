import express from "express";
import { ROUTE_API } from "./constants.mjs";
import { setMorgan } from "./morgan.mjs";
import { router } from "./routes/root.routes.mjs";

export const app = express();
setMorgan();
app.use(express.json());

//Routes
app.use(ROUTE_API, router);
app.use("/*", (req, res) => res.redirect("/api"));

export const getApp = () => app;
