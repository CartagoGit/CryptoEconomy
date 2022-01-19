export const isArray = (arg) => {
	if (!arg) return false;
	return Array.isArray(arg);
};

export const isObject = (arg) => {
	if (!arg) return false;
	if (typeof arg === "object") {
		if (!isArray(arg)) {
			return true;
		}
	}
	return false;
};

export const isEmptyObject = (arg) => {
	if (!arg) return true;
	if (Object.keys(arg).length === 0 && isObject(arg)) return true;
	else return false;
};
