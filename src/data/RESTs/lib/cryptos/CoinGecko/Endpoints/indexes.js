import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import deleteParameter from "../../../libHelpers/deleteParameter.js";
import Constants from "../helpers/constants.js";

const url = new ApiUrls();

const indexes = (params) => request(url.indexes.Indexes, Constants);

const indexesByMarketIdandId = (params) =>
	request(
		url.indexes.GetIndexByMarketIdAndId(params["market_id"], params["id"]),
		deleteParameter(["market_id", "id"], params),
		Constants
	);

const indexesList = () => request(url.indexes.GetMarketIndexes, {}, Constants);

const exportedObject = {
	indexes,
	indexesByMarketIdandId,
	indexesList
};

export default exportedObject;
