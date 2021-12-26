import React from "react";

export const Social = () => {
	return (
		<div className='social'>
			<a
				href='https://github.com/CartagoGit'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='fab fa-github'></span>
			</a>
			<a
				href='https://twitter.com/cartago_rcg'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='fab fa-twitter-square'></span>
			</a>
			<a
				href='mailto:cartago.relaxingcup@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='fas fa-at'></span>
			</a>
			<a
				href='https://www.linkedin.com/in/mario-cabrero-volarich-0aa351193/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='fab fa-linkedin'></span>
			</a>
		</div>
	);
};
