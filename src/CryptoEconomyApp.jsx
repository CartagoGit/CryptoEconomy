import React from "react";
import { Provider } from "react-redux";
import { FilterBar } from "./components/filter/FilterBar";
import { MenuBar } from "./components/menu/MenuBar";
import { OptionsBar } from "./components/options/OptionsBar";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

export const CryptoEconomyApp = () => {
	return (
		<Provider store={store}>
			<MenuBar />
			<FilterBar />
			<OptionsBar />
			<AppRouter />
		</Provider>
	);
};
