//Types
import { portfoliosSchema } from "./sections/portfolios.mjs";
import { walletsSchema } from "./sections/wallets.mjs";
import { tokensSchema } from "./sections/tokens.mjs";
import { Cryptos } from "../../classes/sections/Cryptos.js";
import { Session } from "../../classes/sections/Session.js";
import { Favorites } from "../../classes/sections/Favorites.js";
import { CryptoBasic } from "../../classes/components/coins/CryptoBasic.js";
import { TokenBasic } from "../../classes/components/coins/TokenBasic.js";
import { NetworkBasic } from "../../classes/components/networks/NetworkBasic.js";
import { ListBasicCoins } from "./../../classes/components/lists/ListBasicCoins.js";

//Schemas List
const schemas = {
	session: Session.getSchema(),
	portfolios: portfoliosSchema,
	wallets: walletsSchema,
	tokens: tokensSchema,
	favorites: Favorites.getSchema(),
	cryptos: Cryptos.getSchema()
};

// const cryptosList = new Cryptos();
// (async () => {
// 	await cryptosList.fetchData();
// 	console.log(cryptosList);
// })();

// const fav = new Favorites();
const cry = new CryptoBasic({ id: 1, name: 2134512, symbol: "cualquiera" });
const tok = new TokenBasic({
	address: 1,
	name: 2134512,
	symbol: "cualquiera",
	network: "bsc"
});
const tok2 = new TokenBasic({
	address: 2,
	name: 2134521312,
	symbol: "cualquieradsa",
	network: "bsc"
});
const tok3 = new TokenBasic({
	address: 3,
	name: 2134521312,
	symbol: "cualquieradsa",
	network: "otro"
});
const tok4 = new TokenBasic({
	address: 4,
	name: 2134521312,
	symbol: "cualquieradsa",
	network: "otro"
});

const net = new ListBasicCoins();
net.addToken(tok);
net.addToken(tok2);
net.addToken(tok3);
net.addToken(tok4);
net.deleteToken(tok4);
net.deleteToken(tok3);
net.deleteToken(tok2);
net.deleteToken("1");
// console.log(net.getTokens());
console.log(net.get());
// console.log(net.getTokensFromNetwork("bsc"));
// console.log(net);

export const getSchema = (key) => {
	const schema = { db_type: key };
	return { ...schemas[key], ...schema };
};
