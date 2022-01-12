import express from "express";
import { ROUTE_API } from "./constants.mjs";
import { setLogs } from "./logger.mjs";
import { router } from "./routes/root.routes.mjs";

const app = express();
export const getApp = () => app;
//Init Express
app.use(express.json());
setLogs();

//Routes

app.use(ROUTE_API, router);
app.use("/*", (req, res) => res.redirect(ROUTE_API)); // For redirect any strange route to api root

// error handler
app.use(function (err, req, res, next) {
	res.status(500).json({
		error: err.message
	});
});


