const request  = require("../../../globalHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const listCategories = () => request(url.categories.categoriesList);

const listCategoriesWithMarketData = (params) => request(url.categories.categoriesListMarketData,params);

module.exports = {
    listCategories,
    listCategoriesWithMarketData
};