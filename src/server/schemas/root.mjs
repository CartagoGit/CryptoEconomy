import { sessionSchema } from "./session.mjs";
import { portfoliosSchema } from "./portfolios.mjs";
import { walletsSchema } from "./wallets.mjs";
import { tokensSchema } from "./tokens.mjs";
import { favoritesSchema } from "./favorites.mjs";
import { cryptosSchema } from "./cryptos.mjs";

//Schemas List
const schemas = {
	session: sessionSchema,
	portfolios: portfoliosSchema,
	wallets: walletsSchema,
	tokens: tokensSchema,
	favorites: favoritesSchema,
	cryptos: cryptosSchema
};

//key is the name of schema
export const getSchema = (key) => {
	let schema = { db_type: key };
	return { ...schema, ...schemas[key] };
};
