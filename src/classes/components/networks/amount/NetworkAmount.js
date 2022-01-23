import { TokenAmount } from './../../coins/amount/TokenAmount.js';
import { NetworkBasic } from './../NetworkBasic.js';


export class NetworkAmount extends NetworkBasic {
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
		this.set(data)
	}

	/**
	 * @Functions
	 */
	 getTokenClass = () => {
		return TokenAmount;
	};


}
