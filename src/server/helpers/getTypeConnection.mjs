//Helper to get Data from type data as you want take from jsons

import { getConnection } from "../database.mjs";

export const getDB = (type) => getConnection()[type];

export const getDataDB = async (type) => {
	const db = getDB(type);
	await db.read();
	return db.data;
};