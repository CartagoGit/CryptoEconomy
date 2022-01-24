import { getPlataformsMergeMarketData } from "../../data/getMergeData.js";
import { isNeededAnUpdate } from "../../helpers/classesHelpers.js";
import { isArray, isEmptyObject, isObject } from "../../helpers/isX.js";
import { CryptoInfo } from "../components/coins/info/CryptoInfo.js";

export class Cryptos {
	last_update_unix = null;
	last_update = null;
	list = [];
	amount = null;

	#types = {
		array: "array",
		cryptos: "cryptos",
		crypto: "crypto",
		token: "token",
		tokens: "tokens",
		blacklist: "blacklist",
		wallet: "wallet",
		wallets: "wallets",
		portfolio: "portfolio",
		session: "session",
		object: "object",
		invalid: "invalid"
	};
	#isUpdateNecessary;

	constructor(data = null) {
		if (!this.#isValidData(data)) return;
		this.addData(data);
		this.#isUpdateNecessary && this.#setInfo();
	}

	static getSchema = () => {
		return new this();
	};
	setData = async (data) => {
		if (!this.#isValidData(data)) return;
		const auxList = this.list;
		this.list = [];
		await this.addData(data);
		this.#isUpdateNecessary ? this.#setInfo() : (this.list = auxList);
	};

	addData = async (data = []) => {
		const type = this.#checkTypeData(data);
		const typesData = this.#types;
		if (type === typesData.invalid) return;
		else if (type === typesData.array) {
			let cont = 0;
			for (let i = 0; i < data.length; i++) {
				const crypto = new CryptoInfo(data[i]);
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
			const crypto = new CryptoInfo(data);
			if (!isEmptyObject(crypto)) {
				this.list.push(crypto);
				this.#isUpdateNecessary = true;
			} else this.#isUpdateNecessary = false;
		}
	};

	getData = () => this.list;

	clean = () => {
		this.list = [];
		this.last_update = null;
		this.last_update_unix = null;
		this.amount = null;
	};

	fetchData = async (
		updateAnyway = false,
		minutesSinceLastUpdate = null,
		secondsSinceLastUpdate = null
	) => {
		this.#isUpdateNecessary = updateAnyway;
		if (
			!this.#isUpdateNecessary &&
			isNeededAnUpdate(
				this.last_update_unix,
				minutesSinceLastUpdate,
				secondsSinceLastUpdate
			)
		) {
			return;
		}
		const data = await getPlataformsMergeMarketData();
		this.setData(data);
		this.#setInfo();
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
		this.#isUpdateNecessary = false;
		let typeData;
		const typesData = this.#types;
		if (!data) typeData = typesData.invalid;
		else if (!isObject || isEmptyObject(data)) typeData = typesData.invalid;
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
		if (data instanceof CryptoInfo) return true;
		else return false;
	};
}
