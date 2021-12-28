const request  = require("../../../globalHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const  searchTrending = () => request(url.trending);

module.exports ={
    searchTrending
};