import isX from "../../../helpers/isX.js";
import { TokenBasic } from "../coins/TokenBasic.js";

export class ListTokens {
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
	added_at = null;
	added_at_unix = null;
	last_update = null;
	last_update_unix = null;

	/**
	 * @Functions
	 */
	set = (data) => {
		if (this.isTokenObject(data)) this.addToken(data);
		if (!this.isListTokensObject(data)) return;
		const { network, tokens } = data;
		this.network = network;
		this.tokens = [...tokens];
		this.amount_tokens = tokens.length;
		this.setInfo();
	};

	setInfo = () => {
		this.setAmount();
		this.setLastUpdate();
		this.deleteErrors();
	};

	setLastUpdate = () => {
		this.last_update = Date();
		this.last_update_unix = Date.now();
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

	getListTokensClass = () => {
		return ListTokens;
	};
	isListTokensObject = (data) => {
		return data instanceof this.getListTokensClass();
	};

	addToken = (data) => {
		if (this.areThereErrorsInTokens(data)) return;
		this.tokens.push(data);
		if (!this.network) {
			this.network = data.network;
			this.added_at = Date();
			this.added_at_unix = Date.now();
		}
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
		return data instanceof this.getTokenClass();
	};

	areThereErrorsInTokens = (data) => {
		if (this.checkIsTokenObject(data)) return true;
		if (this.checkTokenObjectErrors(data)) return true;
		this.checkTokenInNetwork(data);
		this.checkIsThisNetwork(data);
		return this.error;
	};

	checkIsTokenObject = (data) => {
		if (!this.isTokenObject(data)) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				is_token_info: "To Add a Token: Data must be a Token Object"
			};
			return true;
		} else return false;
	};
	checkTokenObjectErrors = (data) => {
		if (!data?.address || data?.error) {
			this.error_msg = {
				...this.error_msg,
				token_errors_info: "Token Object have errors"
			};
			return true;
		} else return false;
	};
	checkTokenInNetwork = (data) => {
		const some = this.tokens.some((element) => {
			return (
				element.address.toString().toLowerCase() ===
				data.address.toString().toLowerCase()
			);
		});
		if (some) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				repeated_token_info:
					"There are an element with that address. It cannot be repeated"
			};
		}
	};

	checkIsThisNetwork = (data) => {
		// TODO check in tokenInfo if address is ok in this network
		if (!!this.network && this.network !== data.network) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				network_info: "Token is not from this network"
			};
		}
	};
}
