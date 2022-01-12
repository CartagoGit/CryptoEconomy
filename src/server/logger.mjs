// REVIEW Completly To do some logger in the future

import morgan from "morgan";
// import moment from "moment";
// import fs from "fs";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

import { getApp } from "./app.mjs";
let app;
// import { LOGS_FOLDER, LOGS_ERROR_FOLDER } from "./constants.mjs";

// const logFormat =
// 	":requestId :status :res[content-length] :response-time ms";
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const file = `${moment().format("YYYY_MM_D")}.log`;
// const errorFile = "error_" + file;

//Set messages from morgan in console log and log files
export const setLogs = () => {
	app = getApp();
	// Console Log from morgan
	app.use(morgan("dev"));

	// // Ok File Logs
	// app.use(
	// 	morgan("common", {
	// 		skip: function (res, req) {
	// 			return res.statusCode >= 400;
	// 		},
	// 		stream: fs.createWriteStream(path.join(__dirname, LOGS_FOLDER, file)),
	// 		// flags: "a"
	// 	})
	// );

	// // Error File Logs
	// app.use(
	// 	morgan(errorLogFormat, {
	// 		skip: function (res, req) {
	// 			return res.statusCode < 400;
	// 		},
	// 		stream: fs.createWriteStream(
	// 			path.join(__dirname, LOGS_ERROR_FOLDER, errorFile)
	// 		),
	// 		// flags: "a"
	// 	})
	// );
};
