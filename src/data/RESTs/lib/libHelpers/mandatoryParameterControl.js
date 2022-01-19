import  {_WARN_ } from "./utilities.js";
const mandatoryParameterControl = (mandatory= [],allParams = {}) => {
    mandatory.forEach((param) => {
        if (typeof allParams[param] === "undefined") {
            _WARN_("Missing parameter", "params must include `"+ param +"` and be a of type: String or Object");
        }
    });
};
export default mandatoryParameterControl;