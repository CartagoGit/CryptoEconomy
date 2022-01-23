import { CryptoAmount } from "../../coins/amount/CryptoAmount.js";
import { TokenAmount } from "../../coins/amount/TokenAmount.js";
import { NetworkAmount } from "../../networks/amount/NetworkAmount.js";
import { ListCoinsBasic } from "../ListCoinsBasic.js";

export class ListCoinsAmount extends ListCoinsBasic {
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
		return CryptoAmount;
	};
	getTokenClass = () => {
		return TokenAmount;
	};
    getNetworkClass = () => {
		return NetworkAmount;
	};

	addCoinsInAddress = (value, address, network) => {
		if (!value || !address || !network) return;
		const token = this.getTokenByAddressSymbolOrNameFromNetwork(
			address,
			network
		);
		if (!token) return;
		token.addCoins(value);
	};
	deleteCoinsInAddress = (value, address, network) => {
		if (!value || !address || !network) return;
		const token = this.getTokenByAddressSymbolOrNameFromNetwork(
			address,
			network
		);
		if (!token) return;
		token.deleteCoins(value);
	};
	updateCoinsInAddress = (value, address, network) => {
		if (!value || !address || !network) return;
		const token = this.getTokenByAddressSymbolOrNameFromNetwork(
			address,
			network
		);
		if (!token) return;
		token.updateCoins(value);
	};

}
