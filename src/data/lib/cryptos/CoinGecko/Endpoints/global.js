const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const global = () => request(url.global.global);

const globalDefi = () => request(url.global.globalDefi);

module.exports = {
    global,
    globalDefi
};