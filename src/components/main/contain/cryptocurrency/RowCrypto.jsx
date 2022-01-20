import React from "react";
import { swalBasic } from "../../../../helpers/alerts";

export const RowCrypto = (data) => {
	const {
		id,
		image_url,
		symbol,
		name,
		market_cap_rank,
		market_cap,
		price_usd,
		price_change_percentage
	} = data;
	const {
		_1h = null,
		_7d = null,
		_14d = null,
		_24h = null,
		_30d = null,
		_200d = null,
		_1y = null
	} = price_change_percentage;

	const changeFiatCurrency = () => {
		//TODO
	};

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
			<img src={image_url} alt={id} width={30} height={30}></img>
			<div className='col align-left'>{name}</div>
			<div className='col align-left'>{symbol.toUpperCase()}</div>
			<div className='col'>{price_usd} $</div>
			<div className='col' style={{ color: getColorPercentage(_1h) }}>
				{Math.round((_1h + Number.EPSILON) * 100) / 100}%
			</div>
			<div className='col' style={{ color: getColorPercentage(_7d) }}>
				{Math.round((_7d + Number.EPSILON) * 100) / 100}%
			</div>
			<div className='col' style={{ color: getColorPercentage(_14d) }}>
				{Math.round((_14d + Number.EPSILON) * 100) / 100}%
			</div>
			<div className='col' style={{ color: getColorPercentage(_24h) }}>
				{Math.round((_24h + Number.EPSILON) * 100) / 100}%
			</div>
			<div className='col' style={{ color: getColorPercentage(_30d) }}>
				{Math.round((_30d + Number.EPSILON) * 100) / 100}%
			</div>
			<div className='col' style={{ color: getColorPercentage(_200d) }}>
				{Math.round((_200d + Number.EPSILON) * 100) / 100}%
			</div>
			<div className='col' style={{ color: getColorPercentage(_1y) }}>
				{Math.round((_1y + Number.EPSILON) * 100) / 100}%
			</div>
			<div className='col'>{market_cap} $</div>
		</div>
	);
};
