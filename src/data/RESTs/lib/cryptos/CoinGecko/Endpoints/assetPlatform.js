import request from "../../../libHelpers/request";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants";
const url = new ApiUrls();
const assetPlatformRequest = () => request(url.assetPlatform, {}, Constants);

export default {
    assetPlatformRequest
}