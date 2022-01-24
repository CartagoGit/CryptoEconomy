import isX from "../../../../src/helpers/isX.js";

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

		const {
			name = null,
			symbol = null,
			added_at = null,
			added_at_unix = null,
			last_update = null,
			last_update_unix = null
		} = data;
		this.name = name;
		this.symbol = symbol;
		if (isX.isEmptyObject(data)) {
			this.added_at = null;
			this.added_at_unix = null;
			this.last_update = null;
			this.last_update_unix = null;
		} else {
			this.added_at = !!added_at ? added_at : Date();
			this.added_at_unix = !!added_at_unix ? added_at_unix : Date.now();
			this.last_update = !!last_update ? last_update : Date();
			this.last_update_unix = !!last_update_unix
				? last_update_unix
				: Date.now();
		}
		if (!!this.error) return this.showOnlyErrors(this);
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
	showOnlyErrors = (child) => {
		const error = {
			...this,
			...child,
			...(!!this.name && { name: this.name }),
			...(!!this.symbol && { symbol: this.symbol }),
			...(!!this.id && { id: this.id }),
			...(!!this.address && { address: this.address }),
			...(!!this.network && { network: this.network }),
			error: this.error,
			error_msg: this.error_msg,
			showOnlyErrors: this.showOnlyErrors
		};
		// Object.setPrototypeOf(error, Error)
		return error;
	};
}
