import { getDB, getDataDB } from "../helpers/getTypeConnection.mjs";
import { TYPES } from "../constants.mjs";
const type = TYPES.session.name;

export const getSession = async (req, res) => {
	const data = await getDataDB(type);
	res.status(200).json(data);
};

export const getSessionActivePage = async (req, res) => {
	const data = await getDataDB(type);
	res.status(200).json(data.active_page);
};

export const updateSession = async (req, res) => {
	const db = getDB(type);
	await db.read();
	const data = db.data;
	const dataUpdated = {
		...data,
		active_page: req.body.active_page
	};
	db.data = dataUpdated;
	await db.write();
	res.status(200).send(db.data);
};
