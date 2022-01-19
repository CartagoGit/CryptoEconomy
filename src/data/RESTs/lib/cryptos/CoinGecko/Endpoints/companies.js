import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const treasury = (params) =>
	request(url.companies.treasury(params["coin_id"]), "", Constants);

const exportedObject = { treasury };
export default exportedObject;
