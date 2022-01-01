const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const exchangeRates = () => request(url.exchangeRates, {}, Constants);

module.exports = {
	exchangeRates
};
