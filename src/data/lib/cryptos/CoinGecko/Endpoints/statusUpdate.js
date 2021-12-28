const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const statusUpdate = (params) => request(url.statusUpdate,params);

module.exports = {
    statusUpdate
}

