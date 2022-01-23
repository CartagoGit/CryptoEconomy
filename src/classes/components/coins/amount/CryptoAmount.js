import { CryptoBasic } from "../CryptoBasic.js";
import { CoinAmount } from "./CoinAmount.js";

export class CryptoAmount extends CoinAmount {
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
		super(data);
		Object.assign(this, new CryptoBasic(data)); //Mixin from inheritance multiple
		if (!!this.error) return this.showOnlyErrors(this);
	}
}
