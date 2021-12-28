const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const treasury = (params) => request((url.companies.treasury(params["coin_id"])),"");

module.exports = {treasury};



