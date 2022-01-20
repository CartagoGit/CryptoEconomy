import { type } from "os";
import isX from "../../helpers/isX.js";

export class Favorites {
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
		// if (data instanceof this)
		if (!this.#isValidData(data)) return;
		this.addData(data);
		this.#setAmount();
	}

	/**
	 * @Variables
	 */
	db_type = "favorites";
	amount_cryptos = null;
	cryptos = [];
	amount_tokens = null;
	tokens = [];

	/**
	 * @Private Variables
	 */
	#types = {
		favorites: "favorites",
		crypto: "crypto",
		token: "token",
		invalid: "invalid"
	};

	/**
	 * @Public Functions
	 */
	addCrypto = (data) => { // TODO
		this.cryptos.push(new Crypto(data));
	};

	deleteCrypto = (data) => {};

	getCryptos = () => {
		return this.cryptos;
	};

	addToken = (data) => {};

	deleteToken = (data) => {};

	getTokens = () => {
		return this.tokens;
	};

	/**
	 * @Private Functions
	 */
	#setAmount = () => {
		this.amount_cryptos = this.cryptos.length;
		this.amount_tokens = this.tokens.length;
	};

	#isValidData = (data) => {
		const typeData = this.#checkTypeData(data);
		const typesData = this.#types;
		if (typeData === typesData.invalid) return false;
		else return true;
	};

	#checkTypeData = (data) => {
		let typeData;
		const typesData = this.#types;
		if (!data) typeData = typesData.invalid;
		else if (!isX.isObject || isX.isEmptyObject(data))
			typeData = typesData.invalid;
		else if (this.#isFavoritesObject(data)) typeData = typesData.favorites;
		else if (this.#isCryptoObject(data)) typeData = typesData.crypto;
		else if (this.#isTokenObject(data)) typeData = typesData.token;
		else typeData = typesData.invalid;
		return typeData;
	};

	#isTokenObject = (data) => {
		if (data instanceof Token) return true;
		else return false;
	};

	#isCryptoObject = (data) => {
		if (data instanceof Crypto) return true;
		else return false;
	};
	#isFavoritesObject = (data) => {
		if (data instanceof this) return true;
		else return false;
	};
}

export const favoritesSchema = {
	amount_cryptos: null,
	cryptos: [],
	amount_tokens: null,
	tokens: [] //Components -> tokenSchema
};
