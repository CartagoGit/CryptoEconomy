export class Favorites {
	constructor() {
		this.amount_cryptos = null;
		this.cryptos = [];
		this.amount_tokens = null;
		this.tokens = [];
	}

	setAmount = () => {
		this.amount_cryptos = this.cryptos.length;
		this.amount_tokens = this.tokens.length;
	};

	addCrypto = (data) => {
		this.cryptos.push(new Crypto(data));
	};
}
