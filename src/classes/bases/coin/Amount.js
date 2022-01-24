export class Amount {
	/**
	 * @Constructor
	 */
	constructor(data = {}) {
		const {
			logs = [],
			coins = null,
			amount_usd = !!this.amount_usd ? this.amount_usd : null
		} = data;
		this.logs = [...logs];
		this.coins = coins;
		this.amount_logs = this.logs.length;
		this.amount_usd =
			!!this.price_usd && !!coins ? coins * this.price_usd : amount_usd;
		this.last_log = !!this.logs[this.logs.length - 1]
			? this.logs[this.logs.length - 1].last_update
			: null;
		this.last_log_unix = !!this.logs[this.logs.length - 1]
			? this.logs[this.logs.length - 1].last_update_unix
			: null;
	}

    addCoin = (value) => {
        
    }

    deleteCoin = (value) => {

    }

    updateCoin = (value) => {

    }
}
