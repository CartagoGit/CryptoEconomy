import React from "react";
import { getAllData } from '../../data/data.js';

export const TestExternalApis = () => {
	const handleClickAllData = () => {
		console.log(getAllData());
	};
	return (
		<>
			<button onClick={handleClickAllData}>Todos los datos</button>
		</>
	);
};
