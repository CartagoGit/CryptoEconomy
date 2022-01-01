const request  = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls.js");
const Constants = require("../helpers/constants");
const url = new ApiUrls();
const assetPlatformRequest = () => request(url.assetPlatform, {}, Constants);

module.exports = {
    assetPlatformRequest
}