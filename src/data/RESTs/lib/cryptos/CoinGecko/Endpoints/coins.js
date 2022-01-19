import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import {isArray} from "../../../libHelpers/utilities.js";
import parameterChecker from "../../../libHelpers/parameterChecker.js";
import Constants from "../helpers/constants.js";

const url = new ApiUrls();
const coinsList = (params = "") => {
	return request(url.coins.list, params, Constants);
};

const coinMarkets = (params) => {
	params = parameterChecker(params, ["vs_currency"], "");

	if (isArray(params["ids"])) {

		params.ids = params.ids.join(",");
	}
	return request(url.coins.market, params, Constants);
};

const coinById = (params) => {
	return request(
		url.coins.coinById(params["id"]),
		parameterChecker(params, ["id"], ["id"]),
		Constants
	);
};

const tickersById = (params) => {
	return request(
		url.coins.tickersById(params["id"]),
		parameterChecker(params, ["id"], ["id"]),
		Constants
	);
};

const historyById = (params) => {
	return request(
		url.coins.historyById(params["id"]),
		parameterChecker(params, ["id", "date"], ["id"]),
		Constants
	);
};

const marketChartById = (params) => {
	return request(
		url.coins.marketChartById(params["id"]),
		parameterChecker(params, ["id", "vs_currency", "days"], ["id"]),
		Constants
	);
};

const marketChartRangeById = (params) => {
	return request(
		url.coins.marketChartRangeById(params["id"]),
		parameterChecker(params, ["id", "vs_currency", "from", "to"], ["id"]),
		Constants
	);
};

const statusUpdateById = (params) => {
	return request(
		url.coins.statusUpdateById(params["id"]),
		parameterChecker(params, ["id"], ["id"]),
		Constants
	);
};

const ohlcById = (params) => {
	return request(
		url.coins.ohlcById(params["id"]),
		parameterChecker(params, ["id", "vs_currency", "days"], ["id"]),
		Constants
	);
};
const exportedObject = {
	coinsList,
	coinMarkets,
	coinById,
	tickersById,
	historyById,
	marketChartById,
	marketChartRangeById,
	statusUpdateById,
	ohlcById
};

export default exportedObject;
