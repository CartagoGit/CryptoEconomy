const _endpoints = require("./Endpoints/endpoints");
const Constants = require("./helpers/constants");

class PancakeLib {
	get tokens() {
		return {
			/**
			 * @description Get tokens
			 * @function tokens.list()
			 * @returns {ReturnObject}
			 * {
			 * "updated_at": 1234567,              // UNIX timestamp
			 * "data": {
			 * "0x...": {                        // the address of the BEP20 token
			 *    "name": "...",                  // not necessarily included for BEP20 tokens
			 *    "symbol": "...",                // not necessarily included for BEP20 tokens
			 *    "price": "...",                 // price denominated in USD
			 *   "price_BNB": "...",             // price denominated in BNB
			 * }, }
			 */
			list: () => _endpoints.tokensList(),
			/**
			 * @description Get token by Address
			 * @function tokens.byAddress(address)
             * @params {string} params.id -(Required) Token contract address
			 * @returns {ReturnObject}
             * {
                "updated_at": 1234567,              // UNIX timestamp
                "data": {
                    "name": "...",                    // not necessarily included for BEP20 tokens
                    "symbol": "...",                  // not necessarily included for BEP20 tokens
                    "price": "...",                   // price denominated in USD
                    "price_BNB": "...",               // price denominated in BNB
                }
                }
			 */
			byAddress: (params = {}) => _endpoints.tokenByAddress(params)
		};
	}

	get pairs() {
		/**
			 * @description Get pairs from bsc
			 * @function pairs()
             * @returns {ReturnObject}
             * {
                "updated_at": 1234567,              // UNIX timestamp
                "data": {
                    "0x..._0x...": {                  // the asset ids of BNB and BEP20 tokens, joined by an underscore
                    "pair_address": "0x...",        // pair address
                    "base_name": "...",             // token0 name
                    "base_symbol": "...",           // token0 symbol
                    "base_address": "0x...",        // token0 address
                    "quote_name": "...",            // token1 name
                    "quote_symbol": "...",          // token1 symbol
                    "quote_address": "0x...",       // token1 address
                    "price": "...",                 // price denominated in token1/token0
                    "base_volume": "...",           // volume denominated in token0
                    "quote_volume": "...",          // volume denominated in token1
                    "liquidity": "...",             // liquidity denominated in USD
                    "liquidity_BNB": "..."          // liquidity denominated in BNB
                    },
                    // ...
                }
                }
			 */
		return () => _endpoints.pairsList();
	}
	get summary() {
		/**
			 * @description Get aummary with all tokens from bsc
			 * @function summary()
             * @returns {ReturnObject}
             * {
                "updated_at": 1234567,              // UNIX timestamp
                "data": {
                    "0x..._0x...": {                  // BEP20 token addresses, joined by an underscore
                    "price": "...",                 // price denominated in token1/token0
                    "base_volume": "...",           // last 24h volume denominated in token0
                    "quote_volume": "...",          // last 24h volume denominated in token1
                    "liquidity": "...",             // liquidity denominated in USD
                    "liquidity_BNB": "..."          // liquidity denominated in BNB
                    },
                    // ...
                }
                }
			 */
		return () => _endpoints.summaryList();
	}
}

//Set Constants
PancakeLib.API_VERSION = Constants.API_VERSION;

module.exports = exports = PancakeLib;
