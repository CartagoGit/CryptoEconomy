import isX from "../../../helpers/isX.js";

export class CoinBasic {
	/**
	 * @Statics
	 */
	static getSchema = () => {
		return new this();
	};

	/**
	 * @Constructor
	 */
	constructor(data = {}) {
		//Check possible problems and required params
		this.#checkCoinProblems(data);
		if (!!this.error) return;
		//If there arent problems then...
		const { name = null, symbol = null } = data;
		this.name = name;
		this.symbol = symbol;
		this.added_at = isX.isEmptyObject(data) ? null: Date();
		this.added_at_unix = isX.isEmptyObject(data) ? null : Date.now();
	}

	/**
	 *@Internal Functions
	 */
	#checkCoinProblems = (data) => {
		if (isX.isEmptyObject(data)) return;
		if (!isX.isObject(data)) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				object_info: "Data is not an Object"
			};
			return;
		}
		const { name = null, symbol = null } = data;
		if (!name) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				name_info: "Data must have a name coin"
			};
		}
		if (!symbol) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				symbol_info: "Data must have a symbol coin"
			};
		}
	};

	/**
	 * @Inheritance	  let only errors show in childrens 
	 */
	letOnlyErrors = () => {
		for (var key in this) {
			if (key !== "error" && key !== "error_msg" && key !=="letOnlyErrors") delete this[key];
		}
	};
}
