import React from "react";
import { AppRouter } from "../routers/AppRouter";
import { Social } from "./Social";
export const MainScreen = () => {
	return (
		<main className='main-fill'>
			<div className='main'>
				<div className='info no-selectable'>
					<div className='logoApp'>
						<i className='fas fa-link'></i>
					</div>
					<div className='nameApp'>CryptoEconomy</div>
					<i className='far fa-copyright'> </i>
				</div>

				<div className='container'>
					<h2>Name Element</h2>
					<span className='separator'></span>
					<div className='components'>
						{/* <---------------------------- MAIN------------------------------> */}
						<AppRouter />
						{/* <---------------------------- MAIN------------------------------> */}
					</div>
				</div>
				<footer className='foot'>
					<Social />
					<div className='createdBy no-selectable'>
						<span>Created by Cartago</span>
					</div>
				</footer>
			</div>
		</main>
	);
};
