import isX from "../../../helpers/isX.js";
import { CryptoBasic } from "../coins/CryptoBasic.js";
import { TokenBasic } from "../coins/TokenBasic.js";
import { NetworkBasic } from "../networks/NetworkBasic.js";

export class ListCoinsBasic {
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
		this.set(data);
	}

	/**
	 * @Variables
	 */
	db_type = null;
	amount_cryptos = null;
	cryptos = [];
	amount_tokens = null;
	amount_networks = null;
	networks = [];

	/**
	 * @Public Functions
	 */
	get = () => {
		return this;
	};

	set = (data) => {
		if (!isX.isObject(data)) return;
		const { cryptos = [], networks = [] } = data;
		this.cryptos = [...cryptos];
		this.networks = [...networks];
		this.setInfo();
	};

	//TODO Check in Blacklist, when Blacklist object will be created
	addCrypto = (data) => {
		if (this.areThereErrorsInCryptos(data)) return;
		this.cryptos.push(this.getCryptoObject(data));
		this.setInfo();
	};

	deleteCrypto = (data) => {
		if (isX.isString(data) || isX.isNumber(data)) {
			const lower = data.toString().toLowerCase();
			const newArray = this.cryptos.filter((element) => {
				if (
					element.id.toString().toLowerCase() !== lower &&
					element.symbol.toString().toLowerCase() !== lower &&
					element.name.toString().toLowerCase() !== lower
				)
					return element;
			});
			this.cryptos = newArray;
		}
		if (this.isCryptoObject(data)) {
			const newArray = this.cryptos.filter((element) => {
				if (
					element.id.toString().toLowerCase() !==
						data.id.toString().toLowerCase() ||
					element.symbol.toString().toLowerCase() !==
						data.symbol.toString().toLowerCase() ||
					element.name.toString().toLowerCase() !==
						data.name.toString().toLowerCase()
				)
					return element;
			});
			this.cryptos = newArray;
		}
		this.setInfo();
	};

	getCryptos = () => {
		return this.cryptos;
	};

	getCryptoByIdSymbolOrName = (data) => {
		if (!isX.isString(data) || !isX.isNumber(data)) return;
		const lower = data.toString().toLowerCase();
		const element = this.cryptos.find((elem) => {
			if (
				elem.id.toString().toLowerCase() === lower ||
				elem.symbol.toString().toLowerCase() === lower ||
				elem.name.toString().toLowerCase() === lower
			)
				return elem;
		});
		return element;
	};

	getNetworks = () => {
		return this.networks;
	};

	addToken = (data) => {
		if (!isX.isObject(data)) return;
		let token = data;
		if (!this.isTokenObject(data)) {
			token = new (this.getTokenClass())(data);
			if (token.error) return;
		}
		const index = this.networks.findIndex(
			(element) => element.network === token.network
		);
		if (index === -1) {
			const net = new (this.getNetworkClass())(token);
			if (net.error) return;
			this.networks.push(net);
		} else {
			this.networks[index].addToken(token);
		}
		this.setInfo();
	};

	deleteToken = (data) => {
		if (this.isTokenObject(data) || isX.isString(data) || isX.isNumber(data)) {
			for (let i = 0; i < this.networks.length; i++) {
				this.networks[i].deleteToken(data);
				if (this.networks[i].tokens.length === 0) {
					const auxArray = this.networks.filter(
						(element) => element.network !== this.networks[i].network
					);
					this.networks = !!auxArray ? auxArray : [];
				}
			}
		}
		this.setInfo();
	};

	getTokens = () => {
		let tokensArray = [];
		for (let i = 0; i < this.networks.length; i++) {
			const auxArray = this.networks[i].tokens;
			tokensArray = [...tokensArray, ...auxArray];
		}
		return tokensArray;
	};

	getTokenByAddressSymbolOrNameFromNetwork = (data, network) => {
		if (!isX.isString(data)) return;
		const lowerNet = network.toString().toLowerCase();
		const net = this.networks.find((elem) => {
			if (elem.network.toString().toLowerCase() === lowerNet) return elem;
		});
		if (!net) return;
		const lowerData = data.toString().toLowerCase();
		const element = net.tokens.find((elem) => {
			if (
				elem.address.toString().toLowerCase() === lowerData ||
				elem.symbol.toString().toLowerCase() === lowerData ||
				elem.name.toString().toLowerCase() === lowerData
			)
				return elem;
		});
		return element;
	};

	getTokensFromNetwork = (data) => {
		if (!isX.isString(data)) return;
		const lower = data.toString().toLowerCase();
		const elements = this.networks.find((elem) => {
			if (elem.network.toString().toLowerCase() === lower) return elem;
		});
		return elements.tokens;
	};

	/**
	 * @Functions that should be protected to access in child, but cannot for js limitation
	 */

	areThereErrorsInCryptos = (data) => {
		if (!this.isCryptoObject(data)) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				is_crypto_info: "To Add a Crypto: Data must be a Crypto Object"
			};
			return true;
		}
		if (!data.id || data.error) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				crypto_error_info: "Crypto Object have errors"
			};
			return true;
		}
		if (
			this.cryptos.some((element) => {
				return (
					element.id.toString().toLowerCase() ===
					data.id.toString().toLowerCase()
				);
			})
		) {
			this.error = true;
			this.error_msg = {
				...this.error_msg,
				repeated_crypto_info: "There are an element with that id"
			};
			return true;
		}
		return false;
	};

	setInfo = () => {
		this.setAmount();
		this.deleteErrors();
	};

	setAmount = () => {
		this.amount_cryptos = this.cryptos.length;
		this.amount_networks = this.networks.length;
		this.amount_tokens = this.getTokens().length;
	};

	deleteErrors = () => {
		delete this.error;
		delete this.error_msg;
	};

	//Clases from Coins to use in List
	getCryptoClass = () => {
		return CryptoBasic;
	};
	getTokenClass = () => {
		return TokenBasic;
	};
	getNetworkClass = () => {
		return NetworkBasic;
	};
	//-------------------------------

	isCryptoObject = (data) => {
		if (data instanceof this.getCryptoClass()) return true;
		else return false;
	};

	isTokenObject = (data) => {
		if (data instanceof this.getTokenClass()) return true;
		else return false;
	};

	isNetworkObject = (data) => {
		if (data instanceof this.getNetworkClass()) return true;
		else return false;
	};

	getCryptoObject = (data) => {
		return new (this.getCryptoClass())(data);
	};

	getTokenObject = (data) => {
		return new (this.getTokenClass())(data);
	};

	getNetworkObject = (data) => {
		return new (this.getNetworkClass()(data))();
	};
}
