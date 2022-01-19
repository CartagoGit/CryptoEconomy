import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const global = () => request(url.global.global, {}, Constants);

const globalDefi = () => request(url.global.globalDefi, {}, Constants);

const exportedObject = {
	global,
	globalDefi
};

export default exportedObject;
