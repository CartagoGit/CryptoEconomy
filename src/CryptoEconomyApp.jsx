import React from "react";
import { Provider } from "react-redux";
import { FilterBar } from "./components/filter/FilterBar";
import { MainScreen } from "./components/main/MainScreen";
import { MenuBar } from "./components/menu/MenuBar";
import { OptionsBar } from "./components/options/OptionsBar";
import { store } from "./store/store";
import "./styles/styles.scss";

export const CryptoEconomyApp = () => {
	return (
		<Provider store={store}>
			<MenuBar />
			<FilterBar />
			<OptionsBar />
			<MainScreen />
		</Provider>
	);
};
