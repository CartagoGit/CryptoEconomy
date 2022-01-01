const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const deleteParameter = require("../../../libHelpers/deleteParameter");
const Constants = require("../helpers/constants");

const url = new ApiUrls();

const indexes = (params) => request(url.indexes.Indexes, Constants);

const indexesByMarketIdandId = (params) =>
	request(
		url.indexes.GetIndexByMarketIdAndId(params["market_id"], params["id"]),
		deleteParameter(["market_id", "id"], params),
		Constants
	);

const indexesList = () => request(url.indexes.GetMarketIndexes, {}, Constants);

module.exports = {
	indexes,
	indexesByMarketIdandId,
	indexesList
};
