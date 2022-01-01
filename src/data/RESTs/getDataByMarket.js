/**
 * @description
 * Get Data ->
 * @GraphQl
 * from Global GraphQl BitQuery - NOT API REST
 *
 * @REST
 * from API RESTS to get info from:
 * 
 * @Cryptocurrency
 * Crytpocrurrency in general - Altocins, blockchains, etc.
 * For the moment -> List of APIs  REVIEW add more Apis in the future
 * @Coingecko - > v3
 * https://api.coingecko.com/api
 * 
 * 
 * Tokens from specific network: Bsc, Polygon, Solana, etc
 * For the moment -> List of APIs  REVIEW add more Apis in the future
 * @Bsc
 * @Pancake - > v2
 * https://api.pancakeswap.info/api
 * 
 */


import { isEmptyObject } from "../../helpers/isEmptyObject";
import { getAllFromCoingeckoByMarket } from "./calls/cryptos/coinGeckoData";
import { getAllFromPancakeByMarket } from "./calls/tokens/bsc/Pancake/pancakeData";

// -------------------------------------------------------- EVERYTHING TOGETHER
// Get EVERYTHING
export const getAllDataByMarket = async () => {
	const cryptos = await getCryptosDataByMarket();
	const tokens = await getTokensDataByMarket();
	const allData = {
		...(!isEmptyObject(cryptos) && { cryptos: cryptos }), // Cryptos
		...(!isEmptyObject(tokens) && { tokens: tokens }) //Tokens
	};
	return isEmptyObject(allData) ? null : allData;
};

// ---------------------------- Only Cryptos
// Get cryptos market
export const getCryptosDataByMarket = async () => {
	const coingecko = await getCoingeckoDataByMarket();
	const cryptosData = {
		...(!isEmptyObject(coingecko) && { coingecko: coingecko }) //Coingecko
	};
	return isEmptyObject(cryptosData) ? null : cryptosData;
};

// -------------------------------------------------------- Only Tokens
// Get Every Network Tokens
export const getTokensDataByMarket = async () => {
	const bsc = await getBscDataByMarket();
	const tokensData = {
		...(!isEmptyObject(bsc) && { bsc })
	};
	return isEmptyObject(tokensData) ? null : tokensData;
};

// ---------------------------- get BSC network
export const getBscDataByMarket = async () => {
	const pancake = await getPancakeDataByMarket();
	const bscData = {
		...(!isEmptyObject(pancake) && { pancake }) //Pancake
	};
	return isEmptyObject(bscData) ? null : bscData;
};

//-------------------------------------------------------- APIS
// ----------------------------Cryptos 
//----- get from CoinGecko 
export const getCoingeckoDataByMarket = () =>
	getAllFromCoingeckoByMarket().then((result) => result);

// ----------------------------BSC
//----- get from Pancake 
export const getPancakeDataByMarket = () =>
	getAllFromPancakeByMarket().then((result) => result);
