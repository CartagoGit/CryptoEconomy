const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const parameterChecker = require("../../../libHelpers/parameterChecker");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const exchanges = (params) =>
	request(url.exchanges.Exchanges, params, Constants);

const exchangesList = () => request(url.exchanges.ExchangesList, {}, Constants);

const exchangeById = (params) => {
	return request(
		url.exchanges.getExchangeById(
			params["id"],
			parameterChecker(params, ["id"], ["id"])
		),
		{},
		Constants
	);
};

const exchangeTickerById = (params) => {
	return request(
		url.exchanges.getExchangeTickerById(params["id"]),
		parameterChecker(params, ["id"], ["id"]),
		Constants
	);
};

const exchangesStatusUpdatesById = (params) => {
	return request(
		url.exchanges.getStatusUpdatesById(params["id"]),
		parameterChecker(params, ["id"], ["id"]),
		Constants
	);
};

const exchangesVolumeChartById = (params) => {
	return request(
		url.exchanges.getStatusUpdatesById(
			params["id"],
			parameterChecker(params, ["id"], ["id"])
		),
		{},
		Constants
	);
};

module.exports = {
	exchanges,
	exchangesList,
	exchangeById,
	exchangeTickerById,
	exchangesStatusUpdatesById,
	exchangesVolumeChartById
};
