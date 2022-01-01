const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const global = () => request(url.global.global, {}, Constants);

const globalDefi = () => request(url.global.globalDefi, {}, Constants);

module.exports = {
	global,
	globalDefi
};
