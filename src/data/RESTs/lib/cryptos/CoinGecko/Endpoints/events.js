const request = require("../../../libHelpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Constants = require("../helpers/constants");
const url = new ApiUrls();

const events = (params) => request(url.events.events, params, Constants);

const eventsCountries = () =>
	request(url.events.eventsCountries, {}, Constants);

const eventTypes = () => request(url.events.eventsTypes, {}, Constants);

module.exports = {
	events,
	eventsCountries,
	eventTypes
};
