/**
 * @description The base url for the API
 * @kind constant
 */
const BASE = "https://api.pancakeswap.info/api";

/**
 * @description The host of the API
 * @kind constant
 */
 const HOST = "api.pancakeswap.info";

 /**
 * @description The current version for the API
 * @kind constant
 */
const API_VERSION = "2";

/**
 * @description Extension for API
 * @kind constant
 */
 const API_EXTENSION = `/v${API_VERSION}`;

 /**
 * @description The CoinGecko URI according to base and current version
 * @kind constant
 */
const URI = `${BASE}${API_EXTENSION}`;

module.exports = { BASE, HOST, API_VERSION, API_EXTENSION, URI };
