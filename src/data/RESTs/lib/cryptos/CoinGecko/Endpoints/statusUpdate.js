const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const statusUpdate = (params) => request(url.statusUpdate, params, Constants);

module.exports = {
	statusUpdate
};
