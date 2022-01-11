import { Low, JSONFileSync } from "lowdb";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { getSchema } from "./schemas/root.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const folder = "data";

//Every param is a json with adapter to access and take or write data
const db = {
	session: null,
	cryptos: null,
	tokens: null,
	wallets: null,
	portfolios: null,
	favorites: null
};

const createAdapter = (fileName) => {
	const file = `${fileName}.json`;
	return new JSONFileSync(path.join(__dirname, folder, file));
};

export const createConnection = () => {
	Object.keys(db).map((key) => {
		const adapter = createAdapter(key);
		const low = new Low(adapter);
		low.read();
		if (!low.data) {
			low.data = getSchema(key);
			low.write();
		}
		db[key] = low;
	});
};

export const getConnection = () => db;
