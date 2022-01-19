import { isObject, _WARN_ } from "./utilities.js";
import deleteParameter from "./deleteParameter.js";
import mandatory from "./mandatoryParameterControl.js";

const ParameterChecker = (params,mandatoryFields,ParametersToRemove) => {
	if (!isObject(params)) {
		_WARN_("Invalid parameter", "params must be of type: Object");
	}

	mandatory(mandatoryFields,params);

	return deleteParameter([ParametersToRemove],params);
};

export default ParameterChecker;