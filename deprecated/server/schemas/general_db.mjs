const Dex = {
	id: String,
	name: String,
	symbol: String,
	url_img: String
};

const Token = {
	id: String,
	token_name: String,
	token_symbol: String,
	amount_usd: Number,
	amount: Number,
	network: String,
	dex: [Dex]
};

const Crypto = {
	id: String,
	name: String,
	symbol: String,
	url_img: String,
	price_usd: Number
};

const Plataform = {
	name: String,
	data: [Crypto],
	last_updated: Date
};

const Wallet = {
	id: String,
	tokens: [Token],
	amount_usd: Number
};

const Portfolio = {
	id: String,
	tokens: [Token],
	wallets: [Wallet],
	cryptos: [Crypto]
};

export const dbSchema = {
	cryptos: [Plataform],
	wallets: [Wallet],
	portfolios: [Portfolio]
};
