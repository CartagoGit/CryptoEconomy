import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {MainScreen} from '../components/main/MainScreen'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainScreen />} />
				<Route path='/*' element={<Navigate to='/' />} />

			</Routes>
		</BrowserRouter>
	);
};
