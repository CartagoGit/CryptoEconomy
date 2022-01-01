const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const searchTrending = () => request(url.trending, {}, Constants);

module.exports = {
	searchTrending
};
