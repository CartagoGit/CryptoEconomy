import { Crypto } from "../classes/components/Crypto.mjs";
import { getAllFromCoingeckoByMarket } from "./RESTs/calls/cryptos/coinGeckoData.js";

//REVIEW hacer un merge de los datos de varias APIs, para empezar usaremos solo la api de CoinGecko
export const getPlataformsMergeMarketData = async () => {
	const data = await getAllFromCoingeckoByMarket({
		per_page: 200,
		sparkline: true,
		price_change_percentage: "1h,24h,7d,14d,30d,200d,1y"
	});
	// console.log(data);
	const arrayCryptos = await convertDataMarketFromCoinGeckoIntoCryptoObject(data);
	return arrayCryptos;
};

const convertDataMarketFromCoinGeckoIntoCryptoObject = async (data) => {
	const arrayCryptos = data.map((cryptoData) => {
		const crypto = {
			...cryptoData,
			price_usd: cryptoData.current_price,
			image_url: cryptoData.image,
			price_change_percentage_1h: cryptoData.price_change_percentage_1h_in_currency,
			price_change_percentage_1y: cryptoData.price_change_percentage_1y_in_currency,
			price_change_percentage_7d: cryptoData.price_change_percentage_7d_in_currency,
			price_change_percentage_14d: cryptoData.price_change_percentage_14d_in_currency,
			price_change_percentage_24h: cryptoData.price_change_percentage_24h,
			price_change_percentage_24h: cryptoData.price_change_percentage_24h_in_currency,
			price_change_percentage_30d: cryptoData.price_change_percentage_30d_in_currency,
			price_change_percentage_200d: cryptoData.price_change_percentage_200d_in_currency
		};
		const cryptoObject = new Crypto(crypto);
		return cryptoObject;
	});
	// console.log(arrayCryptos);
	return arrayCryptos;
};
