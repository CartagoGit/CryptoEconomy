const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();
const pingRequest = () => request(url.ping, {}, Constants);

module.exports = {
	pingRequest
};
