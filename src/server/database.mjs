// INIT LOWDB and Json files

import { Low, JSONFileSync } from "lowdb";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { getSchema } from "./schemas/root.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const folder = "data";

const createAdapter = (fileName = null) => {
	const file = `${fileName}.json`;
	return new JSONFileSync(path.join(__dirname, folder, file));
};
//Every param is a json with adapter to access and take or write data
const db = {
	session: new Low(createAdapter()),
	cryptos: new Low(createAdapter()),
	tokens: new Low(createAdapter()),
	wallets: new Low(createAdapter()),
	portfolios: new Low(createAdapter()),
	favorites: new Low(createAdapter())
};

export const createConnection = async () => {
	await Promise.all(
		Object.keys(db).map(async (key) => {
			const adapter = createAdapter(key);
			const low = new Low(adapter);
			await low.read();

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
