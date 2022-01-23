import { CoinInfo } from "./CoinInfo.js";
import { CryptoBasic } from "../CryptoBasic.js";

export class CryptoInfo extends CryptoBasic {
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
		Object.assign(this, new CoinInfo(data)); //Mixin from inheritance multiple
        if (!!this.error) return this.showOnlyErrors(this);
	}
}
