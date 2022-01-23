import { TokenBasic } from "../TokenBasic.js";
import { CoinAmount } from "./CoinAmount.js";

export class TokenAmount extends CoinAmount{
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
		Object.assign(this, new TokenBasic(data));//Mixin from inheritance multiple
		
		if (!!this.error) return this.showOnlyErrors(this);
	}
}
