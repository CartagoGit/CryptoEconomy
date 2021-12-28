const request  = require("../../../globalHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();
const pingRequest = () => request(url.ping);

module.exports = {
    pingRequest
}