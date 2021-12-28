const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const parameterChecker = require("../../../libHelpers/parameterChecker");

const url = new ApiUrls();

const getCoinInfo = (params) => {
	return request(url.contracts.GetCoinInfoByContractAddressAndId(params["id"],params["contract_address"]),parameterChecker(params,["id","contract_address"],["id","contract_addresses"]));
}

const getMarketChart = (params) => {    
	return request(url.contracts.GetMarketChart(params["id"],params["contract_address"]),parameterChecker(params,["id","contract_address","vs_currency","days"],["id","contract_addresses"]));
}

const getMarketChartRange = (params) => {
	return request(url.contracts.GetMarketChartRange(params["id"],params["contract_address"]),parameterChecker(params,["id","contract_address","vs_currency","from","to"],["id","contract_addresses"]));
}

module.exports = {
    getCoinInfo,
    getMarketChart,
    getMarketChartRange
}