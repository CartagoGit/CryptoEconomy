//Types
import { portfoliosSchema } from "./sections/portfolios.mjs";
import { walletsSchema } from "./sections/wallets.mjs";
import { tokensSchema } from "./sections/tokens.mjs";
import { Cryptos } from "../../classes/sections/Cryptos.js";
import { Session } from "../../classes/sections/Session.js";
import { Favorites } from "../../classes/sections/Favorites.js";
import { CryptoBasic } from "../../classes/components/coins/CryptoBasic.js";
import { TokenBasic } from "../../classes/components/coins/TokenBasic.js";
import { ListCoinsBasic } from "../../classes/components/lists/ListCoinsBasic.js";
import { ListCoinsInfo } from "../../classes/components/lists/info/ListCoinsInfo.js";
import { TokenInfo } from "../../classes/components/coins/info/TokenInfo.js";
import { CoinAmount } from "./../../classes/components/coins/amount/CoinAmount.js";
import { TokenAmount } from "../../classes/components/coins/amount/TokenAmount.js";
import { CryptoAmount } from "./../../classes/components/coins/amount/CryptoAmount.js";
import { ListCoinsAmount } from "./../../classes/components/lists/amount/ListCoinsAmount.js";
import { Wallet } from "../../classes/components/wallets/Wallet.js";

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
// const cry = new CryptoBasic({ id: 1, name: 2134512, symbol: "cualquiera" });
// const tok = new TokenAmount({
// 	address: 1,
// 	name: 2134512,
// 	symbol: "cualquiera",
// 	network: "bsc",
// 	price_usd:2030
// });
// const tok2 = new TokenBasic({
// 	address: 2,
// 	name: 2134521312,
// 	symbol: "cualquieradsa",
// 	network: "bsc"
// });
// const tok3 = new TokenBasic({
// 	address: 3,
// 	name: 2134521312,
// 	symbol: "cualquieradsa",
// 	network: "otro"
// });
// const tok4 = new TokenBasic({
// 	address: 4,
// 	name: 2134521312,
// 	symbol: "cualquieradsa",
// 	network: "otro"
// });

// const coin = new TokenAmount({name:"hola", "symbol":"jeui", address: "adreeeeees"});
// const coin = new TokenAmount({name:"hola", "symbol":"jeui", address: "adreeeeees"});
const token = new TokenAmount({
	name: "hola",
	symbol: "jeui",
	address: "direccion",
	network: "una net"
});
const token2 = new TokenAmount({
	name: "Pepote",
	symbol: "pepu",
	address: "pues",
	network: "bsc"
});
const token3 = new TokenInfo({
	name: "hola",
	symbol: "jeui",
	address: "adreeeeees",
	network: "una net"
});
const cry = new CryptoAmount({
	name: "1234",
	symbol: "123124",
	address: "12344",
	network: "una net",
	id: "una ID"
});
// coin.addCoins("2")
// coin.addCoins(10)
// coin.addCoins(Infinity)
// coin.deleteCoins(4)
// coin.deleteCoins(10)
// coin.deleteCoins("0")
// coin.deleteCoins(12)
// console.log(coin);
const coin2 = new TokenAmount (token)
// const coin2 = new CryptoAmount (cry)
// console.log(coin2 instanceof TokenAmount);
// console.log(coin2.prototype);
// console.log(coin2.constructor);
// coin2.addCoins(11)
coin2.addCoins(11)
// // coin2.addCoins(11)
// // coin2.addCoins(11)
// coin2.deleteCoins(101)
// coin2.addCoins(11)
// coin2.updateCoins(2000)
// console.log(coin2);
const list = new ListCoinsAmount();
list.addToken(token2)
// // list.addCrypto(cry);
list.addToken(coin2);
// console.log(list);
// // list.addToken(coin2);
// // const list2 = new ListCoinsInfo();
coin2.addCoins(11)
coin2.addCoins(11)
list.addCoinsInAddress(1000,"direccion","una net")
// console.log(list);
// // list.addCoinsInAddress(9999,"direccion",)
// // list.addCoinsInAddress(9999,"direccion",)
// list.addCoinsInAddress(9999,"pues","bsc")
// list.deleteCoinsInAddress(5999,"pues","bsc")
// list.updateCoinsInAddress(5999,"pues","bsc")


// list2.addCrypto(cry);
// list2.addToken(token2);
// list.addToken(token);
// console.log(list.networks[0].tokens[0]);
// console.log(list);
// console.log(list2);
// console.log(list.networks[0].tokens[0]);
const wallet = new Wallet();
console.log(wallet);

export const getSchema = (key) => {
	const schema = { db_type: key };
	return { ...schemas[key], ...schema };
};
