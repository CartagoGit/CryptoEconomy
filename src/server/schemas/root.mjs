//Types
import { portfoliosSchema } from "./sections/portfolios.mjs";
import { walletsSchema } from "./sections/wallets.mjs";
import { tokensSchema } from "./sections/tokens.mjs";
import { Cryptos } from "../../classes/sections/Cryptos.js";
import { Session } from "../../classes/sections/Session.js";
import { Favorites } from "../../classes/sections/Favorites.js";

//Schemas List
const schemas = {
	session: Session.getSchema(),
	portfolios: portfoliosSchema,
	wallets: walletsSchema,
	tokens: tokensSchema,
	favorites: Favorites.getSchema(),
	cryptos: Cryptos.getSchema()
};

// console.log(Favorites.getSchema());
const fav = new Favorites();
console.log(fav.getCryptos()); 
// const cryptosList = new Cryptos();
// (async () => {
// 	await cryptosList.fetchData();
// 	console.log(cryptosList);
// })();


export const getSchema = (key) => {
	const schema = { db_type: key };
	return { ...schemas[key], ...schema };
};
