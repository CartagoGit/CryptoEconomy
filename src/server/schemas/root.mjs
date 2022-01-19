//Types
import { portfoliosSchema } from "./types/portfolios.mjs";
import { walletsSchema } from "./types/wallets.mjs";
import { tokensSchema } from "./types/tokens.mjs";
import { favoritesSchema } from "./types/favorites.mjs";
import { Cryptos } from "../../classes/types/Cryptos.mjs";
import { Session } from "../../classes/types/Session.mjs";
import { Crypto } from "../../classes/components/crypto.mjs";

//Schemas List
const schemas = {
	session: Session.getSchema(),
	portfolios: portfoliosSchema,
	wallets: walletsSchema,
	tokens: tokensSchema,
	favorites: favoritesSchema,
	cryptos: Cryptos.getSchema()
};
// schemas.cryptos.addCryptos([{price_usd:"hola"}])
// console.log(Cryptos.getSchema());
// console.log(new Cryptos([{ name: "hay algo" }, { name: "y algo mas" }]));
// const pepe = new Cryptos(["hay algo mas"]);
// console.log(new Cryptos([ "hay algo" ]));
// pepe.addCrypto({ name: "pepote" });
const unacrypto = new Crypto({
	name: "esto es una crypto",
	price_usd: "123",
	symbol: "SYMBOLOGI"
});
const unacrypto2 = new Crypto({
	name: "123214",
	price_usd: "13123",
	symbol: "edwqewqI"
});
// const otracrypto = new Crypto({name: "esto es una crypto", price_usd: "123", symbol:"RTA"} );
// pepe.setCryptos(unacrypto);
// // console.log(pepe.constructor);
// // console.log( typeof unacrypto);
// console.log(pepe.checkTypeData([1]));
// console.log(pepe);
const pepa = new Cryptos([{ unobjeto: "paproba" }, unacrypto]);
// pepa.addCryptos(pepe);
// console.log("pepa", pepa);
pepa.setCryptos(unacrypto2);
const pruebafetch = () => {
	const algo = pepa.fetchInfo();
	 pepa.setCryptos(algo);
	console.log(algo);
	// console.log(pepa);
	//
	//
};

const coingecko = pruebafetch();

// console.log("pepa2", pepa);
console.log(coingecko);
// console.log(coingecko);
// await pepa.fetchInfo().then(pepa.setCryptos(coingecko));
// pepa.setCryptos(coingecko);
// console.log("pepa2", pepa);

// console.log(pepe.fetchInfo());
// pepe.fetchInfo();
// console.log( schemas.cryptos);
//key is the name of schema
export const getSchema = (key) => {
	const schema = { db_type: key };
	return { ...schema, ...schemas[key] };
};

// Components Schema List
// export const getCryptoSchema = () => cryptoSchema;
