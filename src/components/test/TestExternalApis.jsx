import React from "react";
import { getAllData } from '../../data/data.js';

export const TestExternalApis = () => {
	const handleClickAllData = async () => {
		console.log(await getAllData());
	};
	return (
		<>
			<button onClick={handleClickAllData}>Todos los datos</button>
		</>
	);
};
