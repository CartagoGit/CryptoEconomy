import React from "react";
import { getAllDataByMarket } from '../../data/RESTs/getDataByMarket.js';


export const TestExternalApis = () => {
	const handleClickAllData = async () => {
		console.log(await getAllDataByMarket());
	};
	return (
		<>
			<button onClick={handleClickAllData}>Todos los datos</button>
		</>
	);
};
