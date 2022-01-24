import { ListTokens } from '../lists/ListTokens.js';


export class NetworkBasic extends ListTokens {
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
	 * @Variables
	 */

}
