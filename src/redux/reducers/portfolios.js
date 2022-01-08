import { types } from "../types/types";

const token = {
	address: null,
	name: null,
	symbol: null,
	amount: null,
	amount_usd: null
};

const crypto = {
	name: null,
	symbol: null,
	data: null,
	amount: null,
	amount_usd: null
};

const wallet = {
	wallet_address: null,
	network_name: null
};

const portfolio = {
	name: null,
	amount_usd: null,
	wallets: [wallet],
	cryptos: [crypto],
	tokens: [token]
};
const initialState = [portfolio];

export const portfolios = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
