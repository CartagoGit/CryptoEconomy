const request  = require("../../../globalHelpers/request");
const ApiUrls = require("../helpers/ApiUrls.js");
const url = new ApiUrls();
const assetPlatformRequest = () => request(url.assetPlatform);

module.exports = {
    assetPlatformRequest
}