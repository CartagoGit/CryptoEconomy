import isX from "../../../helpers/isX.js";
import { NetworkAmount } from "./../networks/amount/NetworkAmount.js";

export class Wallet extends NetworkAmount {
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
		super(data);
		this.set(data);
		// const { address = null } = data;
		// this.address = address;
		// if (!isX.isEmptyObject(data)) {
		// 	if (!address) {
		// 		this.error = true;
		// 		this.error_msg = {
		// 			...this.error_msg,
		// 			wallet_address_info: "Wallet must have an address"
		// 		};
		// 		return { error: this.error, error_msg: this.error_msg };
		// 	}
		// }
	}

	/**
	 * @Variables
	 */
	address = null;

	/**
	 *
	 * @Functions
	 */
	set = (data) => {
		console.log(this);
		if (!!this.address && this.isTokenObject(data)) {
			this.addToken(data);
			return;
		}
		if (!this.isWalletObject(data)) return;
		const { network, tokens, address } = data;
		this.network = network;
		this.address = address;
		this.tokens = [...tokens];
		this.amount_tokens = tokens.length;
		this.setInfo();
	};

	getWalletClass = () => {
		return Wallet;
	};
	isWalletObject = (data) => {
		return data instanceof this.getWalletClass();
	};
	areThereErrorsInTokens = (data) => {
		if (this.checkIsTokenObject(data)) return true;
		if (this.checkTokenObjectErrors(data)) return true;
		this.checkTokenInNetwork(data);
		this.checkIsThisNetwork(data);
		this.checkHasWalletAddress(data);

		return this.error;
	};

	checkHasWalletAddress = (data) => {
		if (!this.address) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				wallet_info: "Wallet has not an address"
			};
		}
	};
}
