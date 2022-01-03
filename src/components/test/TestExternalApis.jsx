import React from "react";
import {
	getGraphQLBitQuery,
	testGetRequest,
	main,
	joderConEstaMierda
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
		// console.log(await joderConEstaMierda());
		// console.log(await main());
	};
	return (
		<>
			<button onClick={handleClickAllData}>Todos los datos</button>
			<button onClick={handleClickGraphQL}>Fetch con GraphQl</button>
			<button onClick={handleClickRequest}>
				Fetch con GraphQl con request
			</button>
		</>
	);
};
