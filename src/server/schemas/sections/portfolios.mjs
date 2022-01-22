export const portfoliosSchema = {
	db_type: "portfolio",
	amount_usd: null,
	amount: null,
	list: [] //portfolio list
};

const portfolio = {
	//Wallet - List Amount coin
	id: null,
	amount_cryptos: null,
	amount_crypto_usd: null,
	cryptos: [],
	amount_tokens: null,
	amount_tokens_usd: null,
	tokens: [],
	amount_usd: null,
	//Wallet
	
	amount_wallets: null,
	amount_wallets_usd: null,
	wallets: [],
};



const wal = {};
const wallet = {
	id: null,
	amount_cryptos: null,
	amount_crypto_usd: null,
	cryptos: [],
	amount_tokens: null,
	amount_tokens_usd: null,
	tokens: [],
	amount_usd: null,
}

const cry = {}
const cryptoAmount = {
	...cry,
	coins : [], // add, delete, get (Array of numbers)
	amount_coins : null,
	amount_coins_usd : null, // get price from coin Info
}

const tok = {};
const tokenAmount = {
	...cry,
	coins : [], // add, delete, get (Array of numbers)
	amount_coins : null,
	amount_coins_usd : null, // get price from coin Info
}


//TODO
// const portfolioSchema = {
// 	id: null,
// 	wallets: [],
// 	cryptos: [],
// 	tokens: [],
// 	amount_wallets: null,
// 	amount_cryptos: null,
// 	amount_tokens: null,
// 	amount_usd: null,
// 	amount_usd_wallets: null,
// 	amount_usd_cryptos: null,
// 	amount_usd_tokens: null
// };

//Create Schema and calculate basic data
// const createPortfoliosSchema = () => {
// 	const initialState = {
// 		db_type: "portfolios",
// 		portfolios: [], //portfolio list
// 		amount_portfolios: null,
// 		amount_usd: null
// 	};
// 	const finalState = {
// 		...initialState,
// 		amount_portfolios: initialState.portfolios.length
// 	};
// 	return finalState;
// };

// export const portfoliosSchema = createPortfoliosSchema();
// export const portfolioSchema = createPortfolioSchema();
