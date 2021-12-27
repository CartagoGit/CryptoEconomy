// -------------------------------------------------------- TODAS JUNTAS
import { isEmptyObject } from "./../helpers/isEmptyObject";
// Get todas
export const getAllData = () => {
	const cryptos = getCryptosData();
	const tokens = getTokensData();
	const allData = {
		...(!isEmptyObject(cryptos) && { cryptos: cryptos }),
		...(!isEmptyObject(tokens) && { tokens: tokens })
	};
	return isEmptyObject(allData) ? null : allData;
};

// ---------------------------- Solo Market de Cryptos de distintas APIS
// Get cryptos market
export const getCryptosData = () => {
	const coingecko = getCoingeckoData();
	const cryptosData = {
		...(!isEmptyObject(coingecko) && { coingecko: coingecko })
	};
	return isEmptyObject(cryptosData) ? null : cryptosData;
};

// -------------------------------------------------------- Solo Tokens de distintas REDES
// Distintas Redes

export const getTokensData = () => {
	const bsc = getBscData();
	const tokensData = {
		...(!isEmptyObject(bsc) && { bsc })
	};
	return isEmptyObject(tokensData) ? null : tokensData;
};

// ---------------------------- RED BSC
export const getBscData = () => {
	const pancake = getPancakeData();
	const bscData = {
		...(!isEmptyObject(pancake) && { pancake })
	};
	return isEmptyObject(bscData) ? null : bscData;
};

//-------------------------------------------------------- APIS
// ----------------------------Cryptos REVIEW
//----- CoinGecko // TODO
const getCoingeckoData = () => null; 

// ----------------------------BSC  REVIEW
//----- Pancake //TODO
const getPancakeData = () => null;
