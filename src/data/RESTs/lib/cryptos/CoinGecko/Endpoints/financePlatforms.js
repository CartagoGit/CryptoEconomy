const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const financePlatforms = (params) =>
	request(url.finance.financePlatforms, params, Constants);

const financeProducts = (params) =>
	request(url.finance.financeProducts, params, Constants);

module.exports = {
	financePlatforms,
	financeProducts
};
