
import { NetworkAmount } from './../networks/amount/NetworkAmount.js';


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
	constructor(data ={}) {
		super(data);
		const {address = null} = data;
		this.address = address;
		if(!address) {
			this.error = true;
			this.error_msg = {
				wallet_address_info: "Wallet must have an address"
			}
		}
	}

	/**
	 * @Variables
	 */
	address = null;
}
