//Usamos la libreria, modificandola para poder usarla serverless de https://github.com/tosunthex/CoinGecko_NodeJs

//1. Import coingeckojs
const CoinGecko = require("../../lib/cryptos/CoinGecko/CoinGeckoLib");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
export const getAllFromCoingeckoByMarket = async (fiat = 'usd') => {
	const res = await CoinGeckoClient.coins.markets({ vs_currency: fiat });
  console.log(res);
	const data = res.data;
	return data;
};
