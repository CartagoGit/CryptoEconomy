import { isObject } from "../../helpers/isX.mjs";

export class Crypto {
	constructor(data = {}) {
		if (!isObject(data)) return; // if isnt an object, create an empty object
		const {
			id, //required -> if object to create crypto havent name create an empty object
			name, // required too
			price_usd, //required too
			symbol, //required too
			market_cap = null,
			market_cap_rank = null,
			ath = null,
			ath_date = null,
			ath_change_percentage = null,
			atl = null,
			atl_change_percentage = null,
			atl_date = null,
			total_volume = null,
			circulating_supply = null,
			max_supply = null,
			total_supply = null,
			image_url = null
		} = data;
		if (!id || !name || !price_usd || !symbol) return; //<- Required params
		this.id = id;
		this.name = name;
		this.price_usd = price_usd;
		this.symbol = symbol;
		this.market_cap = market_cap;
		this.market_cap_rank = market_cap_rank;
		this.ath = ath;
		this.ath_date = ath_date;
		this.ath_change_percentage = ath_change_percentage;
		this.atl = atl;
		this.atl_change_percentage = atl_change_percentage;
		this.atl_date = atl_date;
		this.total_volume = total_volume;
		this.circulating_supply = circulating_supply;
		this.max_supply = max_supply;
		this.total_supply = total_supply;
		this.image_url = image_url;
		this.price_change_percentage = new PriceChangePercentage(data);
		this.last_update_unix = Date.now();
		this.last_update = Date();
	}

	static getSchema = () => new this();
}

class PriceChangePercentage {
	constructor({
		price_change_percentage_1h = null,
		price_change_percentage_24h = null,
		price_change_percentage_7d = null,
		price_change_percentage_14d = null,
		price_change_percentage_30d = null,
		price_change_percentage_200d = null,
		price_change_percentage_1y = null,
		sparkline_in_7d = null
	}) {
		this._1h = price_change_percentage_1h;
		this._24h = price_change_percentage_24h;
		this._7d = price_change_percentage_7d;
		this._14d = price_change_percentage_14d;
		this._30d = price_change_percentage_30d;
		this._200d = price_change_percentage_200d;
		this._1y = price_change_percentage_1y;
		this.sparkline_in_7d = new Sparkline(sparkline_in_7d);
	}
}

class Sparkline {
	constructor(sparkline) {
		this.price = sparkline.price;
	}
}
