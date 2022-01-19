import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import parameterChecker from "../../../libHelpers/parameterChecker.js";
import Constants from "../helpers/constants.js";
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

const exportedObject ={
	exchanges,
	exchangesList,
	exchangeById,
	exchangeTickerById,
	exchangesStatusUpdatesById,
	exchangesVolumeChartById
};

export default exportedObject;
