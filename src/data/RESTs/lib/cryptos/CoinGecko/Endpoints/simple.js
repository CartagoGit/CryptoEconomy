import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import {isArray} from "../../../libHelpers/utilities.js";
import parameterChecker from "../../../libHelpers/parameterChecker.js";
import Constants from "../helpers/constants.js";

const url = new ApiUrls();

const price = (params) => {
	if (isArray(params["vs_currencies"])) {
		params.vs_currencies = params.vs_currencies.join(",");
	}

	if (isArray(params["ids"])) {
		params.ids = params.ids.join(",");
	}

	return request(
		url.simple.price,
		parameterChecker(params, ["ids", "vs_currencies"], ""),
		Constants
	);
};

const tokenPrice = (params) => {
	if (isArray(params["contract_addresses"])) {
		params.contract_addresses = params.contract_addresses.join(",");
	}

	if (isArray(params["vs_currencies"])) {
		params.vs_currencies = params.vs_currencies.join(",");
	}
	return request(
		url.simple.tokenPrice(params["id"]),
		parameterChecker(params, ["id", "contract_addresses", "vs_currencies"]),
		Constants
	);
};

const supportedVsCurrencies = () => {
	return request(url.simple.supportedVsCurrencies, {}, Constants);
};

const exportedObject = { price, tokenPrice, supportedVsCurrencies };

export default exportedObject;
