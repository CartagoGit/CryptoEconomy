const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls.js");
const url = new ApiUrls();
const assetPlatformRequest = () => request(url.assetPlatform);

module.exports = {
    assetPlatformRequest
}