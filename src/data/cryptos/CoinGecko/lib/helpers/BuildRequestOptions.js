/**
 * @description Build options for https.request
 * @function BuildRequestOptions
 * @protected
 * @param {string} path - Relative path for API
 * @param {object} params - Object representing query strings for url parameters
 * @returns {Object} - {path, method, host, port} Options for request
 */

const Utilities = require("./utilities.js");
const Constants = require("./constants.js");

const BuildRequestOptions = (path, params) => {
  //Stringify object params if exist
  if(Utilities.isObject(params)) {
    const queryString = new URLSearchParams(params);
    params = queryString.toString(params);
    path = `/api/v${Constants.API_VERSION}${path}?${params}`;
  }
  else{
    path = `/api/v${Constants.API_VERSION}${path}`;
  }
  
  //Return options
  return {
    path,
    method: "GET",
    host: Constants.HOST,
    port: 443,
    timeout: Constants.TIMEOUT,
  };
};

module.exports = BuildRequestOptions;