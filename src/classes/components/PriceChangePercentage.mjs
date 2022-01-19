export class PriceChangePercentage {
	constructor({
		price_change_percentage_1h = null,
		price_change_percentage_24h = null,
		price_change_percentage_7d = null,
		price_change_percentage_14d = null,
		price_change_percentage_30d = null,
		price_change_percentage_200d = null,
		price_change_percentage_1y = null,
		sparkline = null
	}) {
		this.price_change_percentage_1h = price_change_percentage_1h;
		this.price_change_percentage_24h = price_change_percentage_24h;
		this.price_change_percentage_7d = price_change_percentage_7d;
		this.price_change_percentage_14d = price_change_percentage_14d;
		this.price_change_percentage_30d = price_change_percentage_30d;
		this.price_change_percentage_200d = price_change_percentage_200d;
		this.price_change_percentage_1y = price_change_percentage_1y;
		this.sparkline = sparkline;
	}
}
