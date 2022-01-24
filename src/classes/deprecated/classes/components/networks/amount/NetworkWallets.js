import { Wallet } from "../../wallets/Wallet.js";
import { NetworkAmount } from "./NetworkAmount.js";

export class NetworkWallets extends NetworkAmount {
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
	}

	/**
	 * @Functions
	 */
	getWalletClass = () => {
		return Wallet;
	};

	addToken = () => {};

	deleteToken = () => {};

	addCoins = () => {};

	deleteCoins = () => {};

	updateCoins = () => {};

	addWallet = () => {};

	deleteWallet = () => {};
}
