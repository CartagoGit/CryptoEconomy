export const portfoliosSchema = {
	amount_usd: null,
	amount: null,
	list: [] //portfolio list
};

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
