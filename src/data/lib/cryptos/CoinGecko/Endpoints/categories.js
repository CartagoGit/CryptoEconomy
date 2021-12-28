const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const listCategories = () => request(url.categories.categoriesList);

const listCategoriesWithMarketData = (params) => request(url.categories.categoriesListMarketData,params);

module.exports = {
    listCategories,
    listCategoriesWithMarketData
};