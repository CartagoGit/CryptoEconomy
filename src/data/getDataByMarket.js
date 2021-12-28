import { isEmptyObject } from "../helpers/isEmptyObject";
import { getAllFromCoingeckoByMarket } from "./calls/cryptos/coinGeckoData";

// -------------------------------------------------------- EVERYTHING TOGETHER
// Get EVERYTHING
export const getAllDataByMarket = async () => {
	const cryptos = await getCryptosDataByMarket();
	const tokens = getTokensDataByMarket();
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
export const getTokensDataByMarket = () => {
	const bsc = getBscDataByMarket();
	const tokensData = {
		...(!isEmptyObject(bsc) && { bsc })
	};
	return isEmptyObject(tokensData) ? null : tokensData;
};

// ---------------------------- get BSC network
export const getBscDataByMarket = () => {
	const pancake = getPancakeDataByMarket();
	const bscData = {
		...(!isEmptyObject(pancake) && { pancake }) //Pancake
	};
	return isEmptyObject(bscData) ? null : bscData;
};

//-------------------------------------------------------- APIS
// ----------------------------Cryptos REVIEW add more Apis in the future
//----- get from CoinGecko // TODO
export const getCoingeckoDataByMarket = () =>
	getAllFromCoingeckoByMarket().then((result) => result);

// ----------------------------BSC  REVIEW add more Apis in the future
//----- get from Pancake //TODO
export const getPancakeDataByMarket = () => null;
