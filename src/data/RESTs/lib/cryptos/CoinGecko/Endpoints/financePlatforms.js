import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const financePlatforms = (params) =>
	request(url.finance.financePlatforms, params, Constants);

const financeProducts = (params) =>
	request(url.finance.financeProducts, params, Constants);

const exportedObject = {
	financePlatforms,
	financeProducts
};
export default exportedObject;
