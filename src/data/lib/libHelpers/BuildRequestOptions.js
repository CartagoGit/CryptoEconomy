/**
 * @description Build options for https.request
 * @function BuildRequestOptions
 * @protected
 * @param {string} path - Relative path for API
 * @param {object} params - Object representing query strings for url parameters
 * @returns {Object} - {path, method, host, port} Options for request
 */

const Utilities = require("./utilities.js");
const Constants = require("../cryptos/CoinGecko/routes/constants.js");

const BuildRequestOptions = (path, params) => {
	//Stringify object params if exist
	if (Utilities.isObject(params)) {
		const queryString = new URLSearchParams(params);
		params = queryString.toString(params);
		path = `${path}?${params}`;
	} 

	//Return options
	return {
		path,
		method: "GET",
		host: Constants.HOST,
		api_url: Constants.BASE,
		extension: Constants.API_EXTENSION,
		port: Constants.PORT,
		timeout: Constants.TIMEOUT,
		uri: `${Constants.URI}${path}`
	};
};

module.exports = BuildRequestOptions;
