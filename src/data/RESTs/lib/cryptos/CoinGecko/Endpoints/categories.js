const request  = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const listCategories = () => request(url.categories.categoriesList, {}, Constants);

const listCategoriesWithMarketData = (params) => request(url.categories.categoriesListMarketData,params);

module.exports = {
    listCategories,
    listCategoriesWithMarketData
};