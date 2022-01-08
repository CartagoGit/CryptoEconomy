import { types } from "../types/types";

const token = {
	token_address: null,
	name: null,
	price_usd: null,
	symbol: null,
	data: null,
	dex_names: [],
	last_fetch: null
};

const network = { network_name: null, amount_usd: null, tokens: [token] };

const wallet = { wallet_address: null, amount_usd: null, networks: [network] };
const blacklist = {
	token_adress: null,
	token_name: null,
	token_symbol: null,
	network_name: null
};
const initialState = {
	wallets: [wallet],
	amount_usd: null,
	blacklist: [blacklist]
};

export const wallets = (state = initialState, action) => {
	switch (action.type) {
		case types.wallets.add_wallet: //TODO
			return { ...state };
		default:
			return state;
	}
};
