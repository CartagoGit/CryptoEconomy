import React from "react";
import { swalBasic } from "../../../../helpers/alerts";

export const RowCrypto = (data) => {
	const {
		id,
		image,
		symbol,
		name,
		market_cap_rank,
		market_cap,
		current_price,
		price_change_percentage_1h_in_currency,
		price_change_percentage_1y_in_currency,
		price_change_percentage_7d_in_currency,
		price_change_percentage_14d_in_currency,
		price_change_percentage_24h_in_currency,
		price_change_percentage_30d_in_currency,
		price_change_percentage_200d_in_currency
	} = data;

	const getColorPercentage = (num) => {
		if (num === 0) return null;
		else if (num < -1 && num >= -5) return "#FBFCB3";
		else if (num < -5 && num >= -10) return "#FCD18E";
		else if (num < -10 && num >= -15) return "#FE7546";
		else if (num < -15) return "red";
		else if (num > 1 && num <= 5) return "#B1FEF8";
		else if (num > 5 && num <= 10) return "#B1FEDA";
		else if (num > 10 && num <= 15) return "#B1FEC5";
		else if (num > 15) return "#93FD8D";
	};

	const handleClickRow = () => {
		swalBasic("Success", `Se ha pulsado la linea ${name}`, "success");
	};

	return (
		<div className='row' onClick={handleClickRow}>
			<div className='align-left'>#{market_cap_rank}</div>
			<img src={image} alt={id} width={30} height={30}></img>
			<div className='col align-left'>{name}</div>
			<div className='col align-left'>{symbol.toUpperCase()}</div>
			<div className='col'>{current_price} $</div>
			<div
				className='col'
				style={{
					color: getColorPercentage(price_change_percentage_1h_in_currency)
				}}
			>
				{Math.round(
					(price_change_percentage_1h_in_currency + Number.EPSILON) * 100
				) / 100}
				%
			</div>
			<div
				className='col'
				style={{
					color: getColorPercentage(price_change_percentage_7d_in_currency)
				}}
			>
				{Math.round(
					(price_change_percentage_7d_in_currency + Number.EPSILON) * 100
				) / 100}
				%
			</div>
			<div
				className='col'
				style={{
					color: getColorPercentage(price_change_percentage_14d_in_currency)
				}}
			>
				{Math.round(
					(price_change_percentage_14d_in_currency + Number.EPSILON) * 100
				) / 100}
				%
			</div>
			<div
				className='col'
				style={{
					color: getColorPercentage(price_change_percentage_24h_in_currency)
				}}
			>
				{Math.round(
					(price_change_percentage_24h_in_currency + Number.EPSILON) * 100
				) / 100}
				%
			</div>
			<div
				className='col'
				style={{
					color: getColorPercentage(price_change_percentage_30d_in_currency)
				}}
			>
				{Math.round(
					(price_change_percentage_30d_in_currency + Number.EPSILON) * 100
				) / 100}
				%
			</div>
			<div
				className='col'
				style={{
					color: getColorPercentage(price_change_percentage_200d_in_currency)
				}}
			>
				{Math.round(
					(price_change_percentage_200d_in_currency + Number.EPSILON) * 100
				) / 100}
				%
			</div>
			{/* <div className='col' style={{color: getColorPercentage(price_change_percentage_1y_in_currency)}}>
				{Math.round(
					(price_change_percentage_1y_in_currency + Number.EPSILON) * 100
				) / 100}
				%
			</div> */}
			<div className='col'>{market_cap} $</div>
		</div>
	);
};
