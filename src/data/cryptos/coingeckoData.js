//Usamos la libreria, modificandola para poder usarla serverless de https://github.com/tosunthex/CoinGecko_NodeJs

//1. Import coingeckojs
const CoinGecko = require("./CoinGecko/index");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
export const getAllCryptosByMarket = async () => {
  const res = await CoinGeckoClient.coins.markets({vs_currency:'eur'});
  const data = res.data;
	return data;
};
