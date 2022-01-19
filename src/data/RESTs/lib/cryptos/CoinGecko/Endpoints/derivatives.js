import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import deleteParameter from "../../../libHelpers/deleteParameter.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

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

const exportedObject = {
	derivatives,
	derivativesExchanges,
	derivativesExchangeById,
	derivativesExchangeList
};
export default exportedObject;
