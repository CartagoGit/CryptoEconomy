export const isEmptyObject = (object) => {
    if (!object) return true;
	if (Object.keys(object).length === 0 && object.constructor === Object)
		return true;
	else return false;
};
