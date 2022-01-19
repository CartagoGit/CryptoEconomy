import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const searchTrending = () => request(url.trending, {}, Constants);

const exportedObject = {searchTrending}
export default exportedObject;
