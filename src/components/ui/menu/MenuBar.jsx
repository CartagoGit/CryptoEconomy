import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
export const MenuBar = () => {
	const navigate = useNavigate();
	return (
		<header className='menu-fill no-selectable'>
			<div className='menu'>
				<NavLink className='nav-item' to='/cryptocurrency'>
					CryptoMonedas
				</NavLink>
				<NavLink className='nav-item' to='/tokens'>
					Tokens
				</NavLink>
				<NavLink className='nav-item' to='/portafolio'>
					Portafolio
				</NavLink>
				<NavLink className='nav-item' to='/trades'>
					Trades
				</NavLink>
				<NavLink className='nav-item' to='/historical'>
					Historico
				</NavLink>
			</div>
		</header>
	);
};
