import express from "express";
import { ROUTE_API } from "./constants.mjs";
import { setLogs } from "./logger.mjs";
import { router } from "./routes/root.routes.mjs";

export const app = express();

app.use(express.json());
setLogs();
//Routes
app.use(ROUTE_API, router);
app.use("/*", (req, res) => res.redirect(ROUTE_API)); // For redirect any strange route to api root

export const getApp = () => app;
