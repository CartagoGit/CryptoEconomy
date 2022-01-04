import { getAllFromCoingeckoByMarket } from './RESTs/calls/cryptos/coinGeckoData';

export const getMergeMarketData = ()=> getAllFromCoingeckoByMarket({per_page:200});