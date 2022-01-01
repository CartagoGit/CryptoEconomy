const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const treasury = (params) =>
	request(url.companies.treasury(params["coin_id"]), "", Constants);

module.exports = { treasury };
