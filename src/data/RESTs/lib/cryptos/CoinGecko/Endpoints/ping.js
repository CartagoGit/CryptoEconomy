import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();
const pingRequest = () => request(url.ping, {}, Constants);

const exportedObject = { pingRequest };
export default exportedObject;
