import { createConnection } from "../database.mjs";
import {
	getKeysInSchemaData,
	createDataOnlyWithSchema
} from "../helpers/schemaHelpers.mjs";
import { getDB } from "../helpers/getTypeConnection.mjs";

let db;
let data;

/**
 *   General CRUD for every endpoint.
 * Calling it from callback with request, response and type.
 * Params only if want get or delete an especific key
 */
export const crud = async (req, res, type, params = null) => {
	let finalData = {};
	try {
		db = getDB(type);
		try {
			await db.read();
			createDataOnlyWithSchema(db, type);
		} catch (error) {
			createConnection();
		}
		data = db.data;
		if(!await isDataDbOk()) {
			return res.status(404).json({
				ok: false,
				msg: "Error: There are not data to get"
			});
		}
		if (req.method === "GET") finalData = get(params);
		else if (req.method === "POST") await post(req);
		//TODO
		else if (req.method === "PATCH") finalData = await patch(req, type);
		else if (req.method === "PUT") finalData = await put(req, type);
		else if (req.method === "DELETE") res.send("DELETE"); // TODO

		res.status(200).json({
			ok: true,
			data: finalData
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "There are an error in code. Report to admin"
		});
	}
};

/**
 * "GET" data.
 * Without params, get all data.
 * With params in number,string or array, get only data selected
 */
const get = (params) => {
	if (!params) return data;
	else return getFilteredParams(params);
};

/**
 * "POST". Add a new element in data //TODO
 */
const post = async () => {
	
};

// "PATCH", only update data in the Schemas
const patch = async (req, type) => {
	const body = req.body;
	/**
	 * Insert time in body before compare with schema
	 * then it will dodge if date isn't in the object
	 * */
	const auxBody = {
		...body,
		last_update_unix: Date.now(),
		last_update: Date()
	};
	const onlySchemaData = getKeysInSchemaData(auxBody, type);
	data = {
		...onlySchemaData
	};
	db.data = data;
	await db.write();
	return data;
};

// "PUT", update data but insert new data if body have new data out of Schema
const put = async (req) => {
	const body = req.body;
	data = {
		...data,
		...body
	};
	db.data = data;
	await db.write();
	return data;
};

/**
 * Helper to get object from data with the params in number,
 * string or array which we will filter
 * */
const getFilteredParams = (params) => {
	let auxData = {};
	let arrayParams;
	//check if params are an Array, if not, convert in Array
	if (params instanceof Array) arrayParams = params;
	else arrayParams = [params];
	//if params are in data, insert these params in the aux, which will be returned
	for (let i = 0; i < arrayParams.length; i++) {
		if (arrayParams[i] in data) auxData[arrayParams[i]] = data[arrayParams[i]];
	}
	return auxData;
};

/**
 * Helper to check if there are any data
 * if not create a new data.
 * If anyway data cannot be created, 
 * then return false to show an error
 */
const isDataDbOk = async (res) => {
	if (!data) {
		await createConnection();
		await db.read();
		data = db.data;
		if (!data) {
			return false;
		}
	}
	return true;
};
