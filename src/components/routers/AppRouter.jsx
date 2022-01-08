import { Routes, Route, Navigate } from "react-router-dom";
import { ListCryptos } from "../main/contain/cryptocurrency/ListCryptos";
import { LoadingScreen } from "../ui/LoadingScreen";
import { PortafolioScreen } from '../main/contain/portafolio/PortafolioScreen';
import { TokensScreen } from '../main/contain/tokens/TokensScreen';
import { TradesScreen } from '../main/contain/trades/TradesScreen';
import { HistoricalScreen } from '../main/contain/historical/HistoricalScreen';

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
