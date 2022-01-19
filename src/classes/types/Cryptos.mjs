import  getInfoForLowDB  from "../../data/getMergeData.js";
import { isArray, isEmptyObject, isObject } from "../../helpers/isX.mjs";
import { Crypto } from "../components/crypto.mjs";

export class Cryptos {
	last_update_unix = null;
	last_update = null;
	list = [];
	amount = null;

	#types = {
		array: "array",
		cryptos: "cryptos",
		crypto: "crypto",
		object: "object",
		invalid: "invalid"
	};
	#isUpdateNecessary = true;

	constructor(data = null) {
		if (!this.#isValidData(data)) return;
		this.addCryptos(data);
		this.#isUpdateNecessary && this.#setInfo();
	}

	static getSchema = () => {
		return new this();
	};
	setCryptos = (data) => {
		if (!this.#isValidData(data)) return;
		const auxList = this.list;
		this.list = [];
		this.addCryptos(data);
		this.#isUpdateNecessary ? this.#setInfo() : this.list = auxList;
	};

	addCryptos = (data = []) => {
		const type = this.#checkTypeData(data);
		const typesData = this.#types;
		if (type === typesData.invalid) return;
		else if (type === typesData.array) {
			let cont = 0;
			for (let i = 0; i < data.length; i++) {
				const crypto = new Crypto(data[i]);
				if (!isEmptyObject(crypto)) {
					this.list.push(crypto);
					cont++;
				}
			}
			this.#isUpdateNecessary = cont === 0 ? false : true;
		} else if (type === typesData.cryptos) {
			this.list.push(data.list);
			this.#isUpdateNecessary = true;
		} else if (type === typesData.crypto || type === typesData.object) {
			const crypto = new Crypto(data);
			if (!isEmptyObject(crypto)) {
				this.list.push(crypto);
				this.#isUpdateNecessary = true;
			} else this.#isUpdateNecessary = false;
		}
	};

	getCryptos = () => this.list;

	clean = () => {
		this.list = [];
		this.last_update = null;
		this.last_update_unix = null;
		this.amount = null;
	};

	fetchInfo = () => {
		// console.log(getPlataformsMergeMarketData());
	};

	#setInfo = () => {
		this.#setAmount();
		this.#setUpdate();
	};

	#setAmount = () => (this.amount = this.list.length);

	#setUpdate = () => {
		this.last_update_unix = Date.now();
		this.last_update = Date();
	};

	#checkTypeData = (data) => {
		let typeData;
		const typesData = this.#types;
		if (!data) typeData = typesData.invalid;
		else if (isEmptyObject(data)) typeData = typesData.invalid;
		else if (isArray(data)) typeData = typesData.array;
		else if (this.#isCryptosObject(data)) typeData = typesData.cryptos;
		else if (this.#isCryptoObject(data)) typeData = typesData.crypto;
		else if (isObject(data)) typeData = typesData.object;
		else typeData = typesData.invalid;
		return typeData;
	};

	#isValidData = (data) => {
		const typeData = this.#checkTypeData(data);
		const typesData = this.#types;
		if (typeData === typesData.invalid) return false;
		else return true;
	};

	#isCryptosObject = (data) => {
		if (data instanceof Cryptos) return true;
		else return false;
	};

	#isCryptoObject = (data) => {
		if (data instanceof Crypto) return true;
		else return false;
	};
}
