import { CoinBasic } from "./CoinBasic.js";
import isX from "../../../../src/helpers/isX.js";

export class TokenBasic extends CoinBasic {
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
		//set inheritance and check their errors
		super(data);
		//Check possible problems and required params
		this.#checkTokenProblems(data);

		//If there arent problems then...
		const { network = null, address = null } = data;
		this.address = address;
		this.network = network;
		this.type_coin = "token";
		if (!!this.error) return this.showOnlyErrors(this);
	}

	/**
	 *@Internal Functions
	 */
	#checkTokenProblems = (data) => {
		if (isX.isEmptyObject(data)) return;
		const { network, address } = data;
		if (!network) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				network_info: "Tokens must have a network"
			};
		}
		if (!address) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				address_info: "Data must have an Address Token"
			};
		}
	};
}
