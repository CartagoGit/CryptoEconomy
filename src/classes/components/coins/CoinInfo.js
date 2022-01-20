import isX from "../../../helpers/isX.js";

export class CoinInfo {
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
		//set inheritance
		// super(data);
		//Check possible problems and required params
		if (!!this.error) return;

		//If there arent problems then...
		const {
			price_usd = null,
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

		this.price_usd = price_usd;
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
		this.last_update_unix = isX.isEmptyObject(data) ? null : Date.now();
		this.last_update = isX.isEmptyObject(data) ? null : Date();
	}
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
		sparkline_in_7d = {}
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
	constructor(sparkline = {}) {
		const { price = null } = sparkline;
		this.price = price;
	}
}
