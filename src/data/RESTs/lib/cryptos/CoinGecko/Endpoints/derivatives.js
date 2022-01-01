const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const deleteParameter = require("../../../libHelpers/deleteParameter");
const url = new ApiUrls();
const Constants = require("../helpers/constants");

const derivatives = (params) =>
	request(url.derivatives.Derivatives, params, Constants);

const derivativesExchanges = (params) =>
	request(url.derivatives.DerivativesExchange, params, Constants);

const derivativesExchangeById = (params) =>
	request(
		url.derivatives.DerivativesExchangeById(params["id"]),
		deleteParameter(["id"], params),
		Constants
	);

const derivativesExchangeList = () =>
	request(url.derivatives.DerivativesExchangeList, {}, Constants);

module.exports = {
	derivatives,
	derivativesExchanges,
	derivativesExchangeById,
	derivativesExchangeList
};
