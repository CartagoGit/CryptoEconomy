import React, { useEffect, useState } from "react";
import { getPlataformsMergeMarketData } from "../../../../data/getMergeData.js";

import { RowCrypto } from "./RowCrypto";

export const ListCryptos = () => {
	const [cryptosData, setCryptosData] = useState([]);

	useEffect(() => {
		if (cryptosData.length === 0) {
			const fetchData = async () => {
				setCryptosData(await getPlataformsMergeMarketData());
			};
			fetchData();
			// console.log(cryptosData);
		}
	}, [setCryptosData, cryptosData]);

	return (
		<>
			<div className='list'>
				{cryptosData.map((cryptoData) => {
					console.log(cryptoData);

					return <RowCrypto key={cryptoData.id} {...cryptoData} />;
				})}
			</div>
		</>
	);
};
