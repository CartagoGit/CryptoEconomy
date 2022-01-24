import { Amount } from "./Amount.js";
import { Info } from "./Info.js";

export class Coin {
	constructor(data) {
		const {
			name,
			symbol,
			price_usd = null,
			isAmount = true,
			isInfo = true
		} = data;
		this.name = name;
		this.symbol = symbol;
		this.price_usd = price_usd;
		if (isInfo) Object.assign(this, {...new Info(data)});
		if (isAmount) Object.assign(this, {...new Amount(data)});
	}
}
