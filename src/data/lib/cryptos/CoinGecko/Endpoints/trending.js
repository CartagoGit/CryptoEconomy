const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const  searchTrending = () => request(url.trending);

module.exports ={
    searchTrending
};