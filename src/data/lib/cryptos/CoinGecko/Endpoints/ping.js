const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();
const pingRequest = () => request(url.ping);

module.exports = {
    pingRequest
}