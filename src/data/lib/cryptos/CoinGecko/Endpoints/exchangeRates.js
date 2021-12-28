const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const exchangeRates = () => request(url.exchangeRates);

module.exports = {
    exchangeRates
};