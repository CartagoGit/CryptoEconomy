const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const deleteParameter = require("../../../libHelpers/deleteParameter");

const url = new ApiUrls();

const indexes = (params) => request(url.indexes.Indexes,params);

const indexesByMarketIdandId = (params) => request(
    url.indexes.GetIndexByMarketIdAndId(params["market_id"],params["id"]),
    deleteParameter(["market_id","id"],params));

const indexesList = () => request(url.indexes.GetMarketIndexes);

module.exports = {
    indexes,
    indexesByMarketIdandId,
    indexesList
}
 
