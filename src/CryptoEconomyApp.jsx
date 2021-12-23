import React from "react";
import { swalBasic } from "./helpers/alerts";

export const CryptoEconomyApp = () => {
	const handleClick = () => {
		swalBasic("Exitoso", "He creado mi propio swal personalizado", "success");
	};
	return (
		<>
			<button onClick={handleClick}>Swal</button>
			<div className='prueba'>CryptoEconomyScreen</div>
		</>
	);
};
