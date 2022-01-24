import { TokenInfo } from "../../coins/info/TokenInfo.js";
import { NetworkBasic } from "../NetworkBasic.js";

export class NetworkInfo extends NetworkBasic {
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
	getTokenClass = () => {
		return TokenInfo;
	};
}
