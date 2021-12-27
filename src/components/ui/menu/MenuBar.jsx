import React from "react";
import { NavLink } from "react-router-dom";
export const MenuBar = () => {
	return (
		<header className='menu-fill no-selectable'>
			<div className='menu'>
				<NavLink className='nav-item' to='/cryptocurrency'>
					Cryptocurrency
				</NavLink>
				<NavLink className='nav-item' to='/tokens'>
					Tokens
				</NavLink>
				<NavLink className='nav-item' to='/portfolio'>
					Portfolio
				</NavLink>
				<NavLink className='nav-item' to='/trades'>
					Trades
				</NavLink>
				<NavLink className='nav-item' to='/historical'>
					Historical
				</NavLink>
			</div>
		</header>
	);
};
