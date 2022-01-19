import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const listCategories = () =>
	request(url.categories.categoriesList, {}, Constants);

const listCategoriesWithMarketData = (params) =>
	request(url.categories.categoriesListMarketData, params);

const exportedObject = {
	listCategories,
	listCategoriesWithMarketData
};
export default exportedObject;
