import { getConnection } from "../database.mjs";
const type = "session";
const getDB = () => getConnection()[type];
const getData = async () => {
	const db = getDB();
	await db.read();
	return db.data;
};

export const getSession = async (req, res) => {
	const data = await getData();
	res.status(200).json(data);
};

export const getSessionActivePage = async (req, res) => {
	const data = await getData();
	res.status(200).json(data.active_page);
};

export const updateSession = async (req, res) => {
	const db = getDB();
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
