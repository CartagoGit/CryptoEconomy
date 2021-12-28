import { isEmptyObject } from "./../helpers/isEmptyObject";
import { getAllCryptosByMarket } from "./cryptos/coingeckoData";

// -------------------------------------------------------- TODAS JUNTAS
// Get todas
export const getAllData = async () => {
	const cryptos = await getCryptosData();
	const tokens = getTokensData();
	const allData = {
		...(!isEmptyObject(cryptos) && { cryptos: cryptos }),
		...(!isEmptyObject(tokens) && { tokens: tokens })
	};
	return isEmptyObject(allData) ? null : allData;
};

// ---------------------------- Solo Market de Cryptos de distintas APIS
// Get cryptos market
export const getCryptosData = async () => {
	const coingecko = await getCoingeckoData();
	const cryptosData = {
		...(!isEmptyObject(coingecko) && { coingecko: coingecko }) //Coingecko
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
		...(!isEmptyObject(pancake) && { pancake }) //Pancake
	};
	return isEmptyObject(bscData) ? null : bscData;
};

//-------------------------------------------------------- APIS
// ----------------------------Cryptos REVIEW añadir mas APIS en un futuro
//----- CoinGecko // TODO
const getCoingeckoData = () =>
	getAllCryptosByMarket().then((result) => result);

// ----------------------------BSC  REVIEW añadir mas APIS en un futuro
//----- Pancake //TODO
const getPancakeData = () => null;
