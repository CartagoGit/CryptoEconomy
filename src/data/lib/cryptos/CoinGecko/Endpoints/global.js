const request  = require("../../../globalHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const global = () => request(url.global.global);

const globalDefi = () => request(url.global.globalDefi);

module.exports = {
    global,
    globalDefi
};