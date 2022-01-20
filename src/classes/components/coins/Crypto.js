import { Coin } from "./Coin.js";
import isX from "../../../helpers/isX.js";

export class Crypto extends Coin {
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
		//set inheritance
		super(data);
		//Check possible problems and required params
		this.#checkCryptoProblems(data);
		if (!!this.error) {
			this.letOnlyErrors();
			return;
		}
		//If there arent problems then...
		const { id = null } = data;
		this.id = id;
		this.type_coin = "crypto";
	}

	/**
	 *@Internal Functions
	 */
	#checkCryptoProblems = (data) => {
		if (isX.isEmptyObject(data)) return;
		const { id } = data;
		if (!id) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				id_info: "Data must have an Id"
			};
		}
	};
}
