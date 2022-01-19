import React, { useEffect, useState } from "react";
import { getPlataformsMergeMarketData } from "../../../../data/getMergeData.js";

import { RowCrypto } from "./RowCrypto";

export const ListCryptos = () => {
	const [cryptosData, setCryptosData] = useState([]);

	useEffect(() => {
		if (cryptosData?.length === 0) {
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
				<div className='row header-list'>
					<div className='align-left'>Rank</div>
					{/* // TODO change width correctly*/}
					<div width={40}></div> 
					<div className='col align-left'>Name</div>
					<div className='col align-left'>Symbol</div>
					<div className='col'>FIAT</div>
					<div className='col'>1h</div>
					<div className='col'>7d</div>
					<div className='col'>14d</div>
					<div className='col'>24h</div>
					<div className='col'>30d</div>
					<div className='col'>200d</div>
					<div className='col'>1y</div>
					<div className='col'>Market Cap</div>
				</div>
				{cryptosData?.map((cryptoData) => {
					console.log(cryptoData);

					return <RowCrypto key={cryptoData.id} {...cryptoData} />;
				})}
			</div>
		</>
	);
};
