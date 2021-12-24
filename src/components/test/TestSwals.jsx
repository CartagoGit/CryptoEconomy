import React from "react";
import { swalBasic } from "../../helpers/alerts";

export const TestSwals = () => {
	const handleClickInfo = () => {
		swalBasic("Info", "Esto es meramente informativo", "info");
	};
	const handleClickSuccess = () => {
		swalBasic("Success", "Esto es meramente Success", "success");
	};
	const handleClickError = () => {
		swalBasic("Error", "Esto es meramente Error", "error");
	};
	const handleClickWarning = () => {
		swalBasic("Warning", "Esto es meramente Warning", "warning");
	};
	const handleClickQuestion = () => {
		swalBasic("Question", "Esto es meramente un Question", "question");
	};
	return (
		<div>
			<button onClick={handleClickInfo}>Info</button>
			<button onClick={handleClickSuccess}>Success</button>
			<button onClick={handleClickError}>Error</button>
			<button onClick={handleClickWarning}>Warning</button>
			<button onClick={handleClickQuestion}>Question</button>
		</div>
	);
};
