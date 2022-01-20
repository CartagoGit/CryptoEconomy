//Types
import { portfoliosSchema } from "./sections/portfolios.mjs";
import { walletsSchema } from "./sections/wallets.mjs";
import { tokensSchema } from "./sections/tokens.mjs";
import { favoritesSchema } from "./sections/favorites.mjs";
import { Cryptos } from "../../classes/sections/Cryptos.js";
import { Session } from "../../classes/sections/Session.js";
import { Token } from "../../classes/components/coins/Token.js";
import { Coin } from "../../classes/components/coins/Coin.js";
import { CoinInfo } from "../../classes/components/coins/CoinInfo.js";
import { Crypto } from "../../classes/components/coins/Crypto.js";

//Schemas List
const schemas = {
	session: Session.getSchema(),
	portfolios: portfoliosSchema,
	wallets: walletsSchema,
	tokens: tokensSchema,
	favorites: favoritesSchema,
	cryptos: Cryptos.getSchema()
};
// const pru1 = new Cryptos();
// (async () => {
// 	await pru1.fetchInfo(null,null,0);
// })();
// const jei = new Token({name:"gola",address:"id",symbol:"by", network: " ewrf"});
// const jei = new Token({network:" ", "symbol":2});
// const jei = new Token();
// console.log(jei);
// jei.is
console.log(Token.getSchema()); 
// console.log(Coin.getSchema()); 
console.log(CoinInfo.getSchema())
console.log(Crypto.getSchema())

export const getSchema = (key) => {
	const schema = { db_type: key };
	return { ...schema, ...schemas[key] };
};
