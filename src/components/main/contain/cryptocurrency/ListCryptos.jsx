import React, { useEffect, useState } from "react";
import { getPlataformsMergeMarketData } from "../../../../data/getMergeData";

import { RowCrypto } from "./RowCrypto";

export const ListCryptos = () => {
	// const cryptosData = useMemo(async () => {
	// 	return await getPlataformsMergeMarketData();
	// }, []);

	const [cryptosData, setCryptosData] = useState([]);

	// cryptosData = useMemo(() => {
	// 	getPlataformsMergeMarketData().then((result)=> result);
	// }, []);
	useEffect(async () => {
		if (cryptosData.length === 0) {
			setCryptosData(await getPlataformsMergeMarketData());
			console.log(cryptosData);
		}
	}, [setCryptosData]);

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
