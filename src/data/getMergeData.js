import { getAllFromCoingeckoByMarket } from "./RESTs/calls/cryptos/coinGeckoData";

//TODO hacer un merge de los datos de varias APIs, para empezar usaremos solo la api de CoinGecko
export const getPlataformsMergeMarketData = () =>
	getAllFromCoingeckoByMarket({
		per_page: 200,
		sparkline: true,
		price_change_percentage: "1h,24h,7d,14d,30d,200d,1y"
	});
