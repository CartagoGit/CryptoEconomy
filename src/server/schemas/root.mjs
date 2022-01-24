//Types
import { portfoliosSchema } from "./sections/portfolios.mjs";
import { walletsSchema } from "./sections/wallets.mjs";
import { tokensSchema } from "./sections/tokens.mjs";
import { Amount } from "../../classes/bases/coin/Amount.js";
import { Coin } from "../../classes/bases/coin/Coin.js";

//Schemas List
const schemas = {
	// session: Session.getSchema(),
	portfolios: portfoliosSchema,
	wallets: walletsSchema,
	tokens: tokensSchema,
	// favorites: Favorites.getSchema(),
	// cryptos: Cryptos.getSchema()
};

export const getSchema = (key) => {
	const schema = { db_type: key };
	return { ...schemas[key], ...schema };
};


// const coin = new Coin({name:"unaCoin", symbol : "unSymbol", isAmount: true});
const coin = new Coin({name:"unaCoin", symbol : "unSymbol"});

console.log(coin);