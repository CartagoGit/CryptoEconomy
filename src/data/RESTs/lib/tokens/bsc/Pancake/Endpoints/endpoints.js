const request = require("../../../../libHelpers/request").default;
const ApiUrls = require("../helpers/ApiUrls");
const parameterChecker = require("../../../../libHelpers/parameterChecker").default;
const Constants = require("../helpers/constants");

const url = new ApiUrls();

const tokensList = (params = "") => {
	return request(url.tokens.tokens, params, Constants);
};

const tokenByAddress = (params) => {
	return request(
		url.tokens.token(params["id"]),
		parameterChecker(params, ["id"], ["id"]),
		Constants
	);
};

const summaryList = (params) => {
	return request(url.summary, params, Constants);
};
const pairsList = (params) => {
	return request(url.pairs, params, Constants);
};

module.exports = {
	tokensList,
	tokenByAddress,
	summaryList,
	pairsList
};
