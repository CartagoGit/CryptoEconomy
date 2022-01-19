import { isObject } from "../../helpers/isX.mjs";
import { PriceChangePercentage } from "./PriceChangePercentage.mjs";

export class Crypto {
	constructor(data = {}) {
		if (!isObject(data)) return; // if isnt an object, create an empty object
		const {
			name, //required -> if object to create crypto havent name create an empty object
			price_usd, //required too
			symbol, //required too
			market_cap = null,
			ath = null,
			volume = null,
			supply = null
		} = data;
		if (!name || !price_usd || !symbol) return; //<- Required params
		this.name = name;
		this.price_usd = price_usd;
		this.symbol = symbol;
		this.market_cap = market_cap;
		this.ath = ath;
		this.volume = volume;
		this.supply = supply;
		this.price_change_percentage = new PriceChangePercentage(data);
		this.last_update_unix = Date.now();
		this.last_update = Date();
	}
}
