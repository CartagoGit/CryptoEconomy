export class Info {
	/**
	 * @Constructor
	 */
	constructor(data = {}) {
		const {

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
			image_url = null,
			last_update = null,
			last_update_unix = null
		} = data;


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
		Object.assign(this, new PriceChangePercentage(data));
		this.last_update_unix = !!last_update_unix ? last_update_unix : Date.now();
		this.last_update = !!last_update ? last_update : Date();
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
		Object.assign(this, new Sparkline(sparkline_in_7d))
	}
}

class Sparkline {
	constructor(sparkline = {}) {
		const { price = null } = sparkline;
		this.price = price;
	}
}
