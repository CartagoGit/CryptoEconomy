import { combineReducers } from "redux";
import { main } from "./reducers/main.js";
import { general } from "./reducers/general.js";
import { loading } from "./reducers/loading.js";
import { cryptos } from "./reducers/cryptos.js";
import { wallets } from "./reducers/wallets.js";
import { portfolios } from './reducers/portfolios.js';

export const rootReducer = combineReducers({
	main,
	general,
	loading,
	cryptos,
	wallets,
	portfolios
});
