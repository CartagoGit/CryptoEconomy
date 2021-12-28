const request  = require("../../../libHelpers/request");
const ApiUrls = require("../routes/ApiUrls");
const url = new ApiUrls();

const events = (params) => request(url.events.events,params);

const eventsCountries = () => request(url.events.eventsCountries);

const eventTypes = () => request(url.events.eventsTypes);

module.exports = {
    events,
    eventsCountries,
    eventTypes
};