// INIT LOWDB and Json files

import { Low, JSONFileSync } from "lowdb";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { TYPES } from "./constants.mjs";
import { getSchema } from "./schemas/root.mjs";
import { createDataOnlyWithSchema } from "./helpers/schemaHelpers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const folder = "data";

const createAdapter = (fileName = null) => {
	const file = `${fileName}.json`;
	return new JSONFileSync(path.join(__dirname, folder, file));
};
//Every param is a json with adapter to access and take or write data
const db = {};
//Asign a new DB for every type of data
export const createDb = () => {
	Object.keys(TYPES).map((key) => {
		db[key] = new Low(createAdapter());
	});
};

export const createConnection = async () => {
	createDb();
	await Promise.all(
		Object.keys(db).map(async (key) => {
			const adapter = createAdapter(key);
			const low = new Low(adapter);
			try {
				await low.read();
				
				createDataOnlyWithSchema(low, key);
			} catch (error) {}

			if (!low.data) {
				low.data = getSchema(key);
				await low.write();
			}
			db[key] = low;
		})
	);
};

export const createNewDB = async () => {
	await deleteDBFiles();
	await createConnection();
};

const deleteDBFiles = async () => {
	const directory = path.join(__dirname, folder);
	await new Promise((resolve) => {
		fs.readdir(directory, (err, files) => {
			if (err) throw err;

			for (const file of files) {
				fs.unlink(path.join(directory, file), (err) => {
					if (err) throw err;
				});
			}
			resolve();
		});
	});

	// );
};

export const getConnection = () => db;
