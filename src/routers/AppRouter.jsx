import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ListCryptos } from "../components/main/contain/ListCryptos";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ListCryptos />} />
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};
