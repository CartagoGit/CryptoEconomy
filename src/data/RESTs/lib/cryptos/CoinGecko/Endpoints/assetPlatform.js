import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();
const assetPlatformRequest = () => request(url.assetPlatform, {}, Constants);

const exportedObject ={
    assetPlatformRequest
}
export default exportedObject