const request  = require("../../../globalHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const statusUpdate = (params) => request(url.statusUpdate,params);

module.exports = {
    statusUpdate
}

