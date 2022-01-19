//Usamos la libreria, modificandola para poder usarla serverless de https://github.com/tosunthex/CoinGecko_NodeJs

//1. Import coingeckojs
import CoinGecko from "../../lib/cryptos/CoinGecko/CoinGeckoLib.js";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls

/**
 * @description - Method to get every Market data from CoinGecko
 * @func getAllFromCoingeckoByMarket()
 * @param {*} Object with params
 *
 * @param string vs_currency
 * @description REQUIRED - The target currency of market data (usd, eur, jpy, etc.)
 *
 * @param string ids
 * @description The ids of the coin, comma separated crytocurrency symbols (base). refers to /coins/list.
 * When left empty, returns numbers the coins observing the params limit and start
 *
 * @param string category
 * @description filter by coin category. Refer to /coin/categories/list
 *
 * @param string order
 * @description valid values: market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
 * sort results by field.
 * Default value : market_cap_desc
 *
 * @param int per_page
 * @description valid values: 1..250
 * Total results per page
 * Default value : 100
 *
 * @param int page
 * @description Page through results
 *
 * @params boolean
 * @description Include sparkline 7 days data (eg. true, false)
 *
 * @param string price_change_percentage
 * @description Include price change percentage in 1h, 24h, 7d, 14d, 30d, 200d, 1y
 * (eg. '1h,24h,7d' comma-separated, invalid values will be discarded)
 *
 * @returns
 */
export const getAllFromCoingeckoByMarket = async ({
	vs_currency = "usd",
	ids,
	category,
	order,
	per_page,
	page,
	sparkline,
	price_change_percentage
}) => {
	const res = await CoinGeckoClient.coins.markets({
		vs_currency,
		...(!!ids && { ids }), // if sent param, ids, if not try without another. Its only vs_currency required
		...(!!category && { category }),
		...(!!order && { order }),
		...(!!per_page && { per_page }),
		...(!!page && { page }),
		...(!!sparkline && { sparkline }),
		...(!!price_change_percentage && { price_change_percentage })
	});
	//res.data is every info from cryptos in this API request
	const data = res.data;
	return data;
};
