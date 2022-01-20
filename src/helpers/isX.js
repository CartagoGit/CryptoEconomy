export const isArray = (arg) => {
	if (!arg) return false;
	return Array.isArray(arg);
};

export const isObject = (arg) => {
	if (!arg) return false;
	if (typeof arg === "object") {
		if (!isArray(arg)) return true;
	} else return false;
};

export const isEmptyObject = (arg) => {
	if (!isObject(arg)) return false;
	if (Object.keys(arg).length === 0) return true;
	else return false;
};

export const isEmptyArray = (arg) => {
	if (!isArray(arg)) return false;
	else return arg.length === 0 ? true : false;
};

export const isArrayWithEveryEmptyObjects = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.every((element) => {
			return isEmptyObject(element);
		});
	}
};

export const isArrayWithSomeEmptyObject = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.some((element) => {
			return isEmptyObject(element);
		});
	}
};

export const isArrayWithEveryNumberValues = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.every((element) => {
			return isNumberValue(element);
		});
	}
};

export const isArrayWithSomeNumberValues = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.some((element) => {
			return isNumberValue(element);
		});
	}
};

export const isArrayWithEveryNumber = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.every((element) => {
			return isNumber(element);
		});
	}
};

export const isArrayWithSomeNumber = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.some((element) => {
			return isNumber(element);
		});
	}
};

export const isArrayWithEveryString = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.every((element) => {
			return isString(element);
		});
	}
};

export const isArrayWithSomeString = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.some((element) => {
			return isString(element);
		});
	}
};

export const isArrayWithEveryBoolean = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.every((element) => {
			return isBoolean(element);
		});
	}
};

export const isArrayWithSomeBoolean = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.some((element) => {
			return isBoolean(element);
		});
	}
};

export const isArrayWithEverySymbol = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.every((element) => {
			return isSymbol(element);
		});
	}
};

export const isArrayWithSomeSymbol = (arg) => {
	if (!isArray(arg) || isEmptyArray(arg)) return false;
	else {
		return arg.some((element) => {
			return isSymbol(element);
		});
	}
};

export const isString = (arg) => {
	return Object.prototype.toString.call(arg) === "[object String]";
};

export const isEmptyString = (arg) => {
	if (!isString(arg)) return false;
	return arg == "";
};

export const isBlankString = (arg) => {
	if (!isString(arg)) return false;
	return /^\s*$/.test(arg);
};

export const isSymbol = (arg) => {
	return (
		typeof arg === "symbol" ||
		(typeof arg === "object" &&
			Object.prototype.toString.call(arg) === "[object Symbol]")
	);
};

export const isNumber = (arg) => {
	return (
		typeof arg === "number" ||
		(typeof arg === "object" &&
			Object.prototype.toString.call(arg) === "[object Number]")
	);
};

export const isNumberValue = (arg) => {
	if (!arg || isBoolean(arg)) {
		return false;
	}
	return !isNaN(arg);
};

export const isBoolean = (arg) => {
	return (
		typeof arg == "boolean" ||
		(typeof arg === "object" &&
			Object.prototype.toString.call(arg) === "[object Boolean]")
	);
};

//add anothers for free library

export default {
	isBoolean,
	isNumber,
	isNumberValue,
	isString,
	isObject,
	isArray,
	isSymbol,
	isEmptyArray,
	isEmptyObject,
	isEmptyString,
	isBlankString,
	isArrayWithEveryBoolean,
	isArrayWithSomeBoolean,
	isArrayWithEveryNumber,
	isArrayWithSomeNumber,
	isArrayWithEveryNumberValues,
	isArrayWithSomeNumberValues,
	isArrayWithEveryString,
	isArrayWithSomeString,
	isArrayWithEveryEmptyObjects,
	isArrayWithSomeEmptyObject,
	isArrayWithEverySymbol,
	isArrayWithSomeSymbol
};
