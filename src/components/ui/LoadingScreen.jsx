import React from "react";
import { ReactComponent as Loading } from "../../assets/svgs/loading.svg";

export const LoadingScreen = () => {
	return (
		<div className='loading-box'>
			<div className='loadingAnimation'>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{/* <img src='../../assets/svgs/loading.svg' alt='Loading' /> */}
			<Loading />
		</div>
	);
};
