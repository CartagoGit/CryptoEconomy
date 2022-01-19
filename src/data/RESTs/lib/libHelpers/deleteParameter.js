const deleteParameter = (willBeDeleted = [],allParams = {}) => {
	willBeDeleted.forEach((param) => {
		delete allParams[param]
	});
	return allParams;
};
export default deleteParameter;