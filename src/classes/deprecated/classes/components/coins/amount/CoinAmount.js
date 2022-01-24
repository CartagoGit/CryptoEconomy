import isX from "../../../../../src/helpers/isX.js";
import { CoinBasic } from "../CoinBasic.js";

export class CoinAmount extends CoinBasic {
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
		super(data);
		const { coins = null, log = [] } = data;

		if (isX.isEmptyObject(data)) {
			this.log = [];
			this.amount_logs = null;
			this.coins = coins;
			this.amount_usd = null;
		} else {
			this.log = [...log];
			this.setInfo();
			this.coins = (!!coins) ? coins : 0;
			this.amount_usd = null; //TODO get price_usd from coinInfo
		}
		if (!!this.error) return this.showOnlyErrors(this);
	}

	/**
	 * @Functions
	 */
	setInfo = () => {
		this.setLastUpdate();
		this.setAmountLogs();
	};
	setLastUpdate = () => {
		this.last_update = Date();
		this.last_update_unix = Date.now();
	};
	setAmountLogs = () => {
		this.amount_logs = this.log.length;
	};
	addCoins = (value) => {
		if (this.error) return;
		if (!isX.isNumberValue(value) || !isFinite(value)) return;
		const coins_used = parseFloat(value);
		if (coins_used <= 0) return;
		const coins_spent = coins_used;
		if (!this.coins) this.coins = 0;
		const final_coins = this.coins + coins_used;
		const final_usd = this.amount_usd; // Todo USD
		const data = this.getDataToEntryLog(
			"add",
			final_coins,
			final_usd,
			coins_used,
			coins_spent
		);
		const log = new LogEntry(data);
		this.log.push(log);
		this.coins = final_coins;
		this.amount_usd = final_usd;
		this.setInfo();
	};
	
	deleteCoins = (value) => {
		if (this.coins === 0 || this.error) return;
		if (!isX.isNumberValue(value) || !isFinite(value)) return;
		let coins_used = parseFloat(value);
		if (coins_used <= 0) return;
		let final_coins = this.coins - coins_used;
		let leftover_coins = 0;
		let coins_spent = coins_used;
		if (final_coins < 0) {
			leftover_coins = -final_coins;
			final_coins = 0;
			coins_spent = this.coins;
		}
		const final_usd = this.amount_usd; // Todo USD
		const data = this.getDataToEntryLog(
			"delete",
			final_coins,
			final_usd,
			coins_used,
			coins_spent
		);
		if (leftover_coins > 0) data.leftover_coins = leftover_coins;
		const log = new LogEntry(data);
		this.log.push(log);
		this.coins = final_coins;
		this.amount_usd = final_usd;
		this.setInfo();
	};

	updateCoins = (value) => {
		if (this.error) return;
		if (!isX.isNumberValue(value) || !isFinite(value)) return;
		let coins_new_value = parseFloat(value);
		if (coins_new_value < 0) return;
		const final_coins = coins_new_value;
		const final_usd = this.amount_usd; // Todo USD
		let coins_spent;
		if (this.coins >= coins_new_value)
			coins_spent = this.coins - coins_new_value;
		else coins_spent = coins_new_value - this.coins;
		const data = this.getDataToEntryLog(
			"update",
			final_coins,
			final_usd,
			coins_new_value,
			coins_spent
		);
		const log = new LogEntry(data);
		this.log.push(log);
		this.coins = final_coins;
		this.amount_usd = final_usd;
		this.setInfo();
		
	};

	getLog = () => {
		return this.log;
	};

	getDataToEntryLog = (
		type,
		final_coins,
		final_usd,
		coins_used,
		coins_spent
	) => {
		const types = {
			add: "Add",
			delete: "Delete",
			update: "Update"
		};
		const data = {
			type: types[type],
			start_amount_coins: this.coins,
			start_amount_usd: this.amount_usd,
			final_amount_coins: final_coins,
			final_amount_usd: final_usd,
			coins_used: coins_used,
			coins_spent: coins_spent,
			coin_price_in_this_moment_usd: null //TODO
		};
		return data;
	};
}

class LogEntry {
	constructor(data) {
		const {
			type,
			start_amount_coins,
			start_amount_usd = null,
			final_amount_coins,
			final_amount_usd = null,
			coins_used,
			coins_spent,
			leftover_coins = null,
			coin_price_in_this_moment_usd = null
		} = data;
		this.date = Date();
		this.date_unix = Date.now();
		this.action = type;
		this.coin_price_in_this_moment_usd = coin_price_in_this_moment_usd;
		this.start_amount_coins = start_amount_coins;
		this.start_amount_usd = start_amount_usd; //TODO every work with usd, when Info will finished
		this.final_amount_coins = final_amount_coins;
		this.final_amount_usd = final_amount_usd;
		this.coins_used = coins_used;
		this.coins_spent = coins_spent;
		if (!!leftover_coins) this.leftover_coins = leftover_coins;
	}
}
