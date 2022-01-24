import { CryptoInfo } from '../../coins/info/CryptoInfo.js';
import { TokenInfo } from '../../coins/info/TokenInfo.js';
import { ListCoinsBasic } from '../ListCoinsBasic.js';

export class ListCoinsInfo extends ListCoinsBasic{
    /**
	 * @Statics
	 */
	static getSchema = () => {
		return new this();
	};

    /**
     * @Functions override
     */
    getCryptoClass = () => {
		return CryptoInfo;
	};
	getTokenClass = () => {
		return TokenInfo;
	};

}