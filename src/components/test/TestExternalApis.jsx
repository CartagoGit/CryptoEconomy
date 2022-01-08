import React from "react";
import { getPlataformsMergeMarketData } from "../../data/getMergeData.js";
import {
	getGraphQLBitQuery,
} from "../../data/GraphQL/fetchGraphQL.js";
import { getAllDataByMarket } from "../../data/RESTs/getDataByMarket.js";

export const TestExternalApis = () => {
	const handleClickAllData = async () => {
		console.log(await getAllDataByMarket());
	};
	const handleClickGraphQL = async () => {
		console.log(await getGraphQLBitQuery());
	};
	const handleClickRequest = async () => {
		console.log(await getPlataformsMergeMarketData()); 
	};
	return (
		<>
			<button onClick={handleClickAllData}>Todos los datos</button>
			<button onClick={handleClickGraphQL}>Fetch con GraphQl</button>
			<button onClick={handleClickRequest}>
				Fetch con Merge
			</button>
		</>
	);
};
