import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const statusUpdate = (params) => request(url.statusUpdate, params, Constants);

const exportedObject = { statusUpdate };
export default exportedObject;
