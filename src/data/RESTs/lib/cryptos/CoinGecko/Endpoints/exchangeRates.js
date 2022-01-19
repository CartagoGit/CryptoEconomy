import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const exchangeRates = () => request(url.exchangeRates, {}, Constants);

const exportedObject ={
	exchangeRates
};
export default exportedObject
