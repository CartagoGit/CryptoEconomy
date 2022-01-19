import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import parameterChecker from "../../../libHelpers/parameterChecker.js";
import Constants from "../helpers/constants.js";

const url = new ApiUrls();

const getCoinInfo = (params) => {
	return request(
		url.contracts.GetCoinInfoByContractAddressAndId(
			params["id"],
			params["contract_address"]
		),
		parameterChecker(
			params,
			["id", "contract_address"],
			["id", "contract_addresses"]
		),
		Constants
	);
};

const getMarketChart = (params) => {
	return request(
		url.contracts.GetMarketChart(params["id"], params["contract_address"]),
		parameterChecker(
			params,
			["id", "contract_address", "vs_currency", "days"],
			["id", "contract_addresses"]
		),
		Constants
	);
};

const getMarketChartRange = (params) => {
	return request(
		url.contracts.GetMarketChartRange(params["id"], params["contract_address"]),
		parameterChecker(
			params,
			["id", "contract_address", "vs_currency", "from", "to"],
			["id", "contract_addresses"]
		),
		Constants
	);
};

const exportedObject ={
	getCoinInfo,
	getMarketChart,
	getMarketChartRange
};
export default exportedObject
