import React, { useState } from "react";
export const FilterBar = () => {
	const [isFilterVisible, setFilterVisible] = useState(false);

	const handleToggle = () => {
		const filterPanel = document.getElementsByClassName("filter")[0];
		if (!isFilterVisible) {
			filterPanel.classList.add("animate__slideInRight");
		} else {
			filterPanel.classList.add("animate__slideOutRight");
		}
		let handler;
		filterPanel.addEventListener(
			"animationend",
			(handler = (e) => {
				console.log("animacion terminada:" + e.stopImmediatePropagation);
				filterPanel.classList.remove("animate__slideInRight");
				filterPanel.classList.remove("animate__slideOutRight");
				setFilterVisible(!isFilterVisible);
				filterPanel.removeEventListener("animationend", handler);
			})
		);
	};

	return (
		<div className='filter-fill no-selectable'>
			<div className='btnShow button' onClick={handleToggle}>
				<span className='fas fa-arrows-alt-h '></span>
			</div>
			<form
				className='filter animate__animated animate__faster'
				style={{ visibility: !isFilterVisible && "hidden" }}
			>
				<div>Option 1</div>
				<div>Option 2</div>
				<div>Option 3</div>
				<div>Option 4</div>
				<div>Option 5</div>
			</form>
		</div>
	);
};
