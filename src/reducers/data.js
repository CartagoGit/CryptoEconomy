import { types } from "../types/types";

const dex = { data: null, dex_name: null, last_fetch: null };
const plataform = { data: null, plataform_name: null, last_fetch: null };

const network = { dex: [dex], network_name: null };

const initialState = {
	cryptos: [plataform],
	tokens: [network]
};

export const data = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const fetching = {
	// TODO crear reducer de estado del fetch
	loading: null,
	error: null,
	data_fetched: null,
	is_ok: true
};
