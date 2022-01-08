import { combineReducers } from "redux";
import { main } from "./reducers/main";
import { general } from "./reducers/general";
import { loading } from "./reducers/loading";
import { cryptos } from "./reducers/cryptos";
import { wallets } from "./reducers/wallets";
import { portfolios } from './reducers/portfolios';

export const rootReducer = combineReducers({
	main,
	general,
	loading,
	cryptos,
	wallets,
	portfolios
});
