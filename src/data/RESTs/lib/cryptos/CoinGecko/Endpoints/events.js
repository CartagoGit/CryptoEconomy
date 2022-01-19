import request from "../../../libHelpers/request.js";
import ApiUrls from "../helpers/ApiUrls.js";
import Constants from "../helpers/constants.js";
const url = new ApiUrls();

const events = (params) => request(url.events.events, params, Constants);

const eventsCountries = () =>
	request(url.events.eventsCountries, {}, Constants);

const eventTypes = () => request(url.events.eventsTypes, {}, Constants);

const exportedObject ={
	events,
	eventsCountries,
	eventTypes
};
export default exportedObject
