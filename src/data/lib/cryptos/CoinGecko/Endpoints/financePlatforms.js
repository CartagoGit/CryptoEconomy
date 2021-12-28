const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const financePlatforms = (params) => request(url.finance.financePlatforms,params);

const financeProducts = (params) => request(url.finance.financeProducts,params);

module.exports = {
    financePlatforms,
    financeProducts
};