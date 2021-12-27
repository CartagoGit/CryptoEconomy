import { Routes, Route, Navigate } from "react-router-dom";
import { ListCryptos } from "../components/main/contain/cryptocurrency/ListCryptos";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { PortafolioScreen } from './../components/main/contain/portafolio/PortafolioScreen';
import { TokensScreen } from './../components/main/contain/tokens/TokensScreen';
import { TradesScreen } from './../components/main/contain/trades/TradesScreen';
import { HistoricalScreen } from './../components/main/contain/historical/HistoricalScreen';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/cryptocurrency' element={<ListCryptos />} />
			<Route path='/tokens' element={<TokensScreen />} />
			<Route path='/portfolio' element={<PortafolioScreen />} />
			<Route path='/trades' element={<TradesScreen />} />
			<Route path='/historical' element={<HistoricalScreen />} />

			<Route path='/loading' element={<LoadingScreen />} />
			<Route path='/*' element={<Navigate to='/loading' />} />

			
		</Routes>
	);
};
