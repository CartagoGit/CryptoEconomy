import isX from "../../../helpers/isX.js";
import { TokenBasic } from "../coins/TokenBasic.js";

export class NetworkBasic {
	/**
	 * @Statics
	 */
	static getSchema = () => {
		return new this();
	};

	/**
	 * @Constructor
	 */
	constructor(data) {
		this.set(data);
	}

	/**
	 * @Variables
	 */
	network = null;
	amount_tokens = null;
	tokens = [];

	/**
	 * @Functions
	 */
	set = (data) => {
		if (this.isTokenObject(data)) this.addToken(data);
		if (!this.isNetworkObject(data)) return;
		const { network, tokens } = data;
		this.network = network;
		this.tokens = [...tokens];
		this.amount_tokens = tokens.length;
		this.setInfo();
	};

	setInfo = () => {
		this.setAmount();
		this.deleteErrors();
	};
	setAmount = () => {
		this.amount_tokens = this.tokens.length;
	};

	deleteErrors = () => {
		delete this.error;
		delete this.error_msg;
	};

	getTokens = () => {
		return this.tokens;
	};

	getNetworkClass = () => {
		return NetworkBasic;
	};
	isNetworkObject = (data) => {
		return data instanceof this.getNetworkClass();
	};

	addToken = (data) => {
		if (this.areThereErrorsInTokens(data)) return;
		this.tokens.push(data);
		if (!this.network) this.network = data.network;
		this.setInfo();
	};

	deleteToken = (data) => {
		if (isX.isString(data) || isX.isNumber(data)) {
			const lower = data.toString().toLowerCase();
			const newArray = this.tokens.filter((element) => {
				if (element.address.toString().toLowerCase() !== lower) return element;
			});
			this.tokens = [...newArray];
			this.setInfo();
		}
		if (this.isTokenObject(data)) {
			const newArray = this.tokens.filter((element) => {
				if (
					element.address.toString().toLowerCase() !==
					data.address.toString().toLowerCase()
				)
					return element;
			});
			this.tokens = [...newArray];
			this.setInfo();
		}
	};

	getTokenByAddressSymbolOrName = (data) => {
		if (!isX.isString(data) && !isX.isNumber(data)) return;
		const lower = data.toString().toLowerCase();
		const element = this.tokens.find((elem) => {
			if (
				elem.address.toString().toLowerCase() === lower ||
				elem.symbol.toString().toLowerCase() === lower ||
				elem.name.toString().toLowerCase() === lower
			)
				return elem;
		});
		return element;
	};

	getTokenClass = () => {
		return TokenBasic;
	};
	getTokenObject = (data) => {
		return new (this.getTokenClass())(data);
	};
	isTokenObject = (data) => {
		if (data instanceof this.getTokenClass()) return true;
		else return false;
	};

	areThereErrorsInTokens = (data) => {
		if (!this.isTokenObject(data)) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				is_token_info: "To Add a Token: Data must be a Token Object"
			};
			return true;
		}
		if (!data.address || data.error) {
			this.error_msg = {
				...this.error_msg,
				token_errors_info: "Token Object have errors"
			};
			return true;
		}
		if (this.isThereThisTokenInNetwork(data)) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				repeated_token_info:
					"There are an element with that address. It cannot be repeated"
			};
		}
		if (!!this.network && this.network !== data.network) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				network_info: "Token is not from this network"
			};
		}
		return this.error;
	};

	isThereThisTokenInNetwork = (data) => {
		const some = this.tokens.some((element) => {
			return (
				element.address.toString().toLowerCase() ===
				data.address.toString().toLowerCase()
			);
		});
		return some;
	};
}
