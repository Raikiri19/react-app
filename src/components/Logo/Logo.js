import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import grim from './grim.png';

const Logo = ({onChangeRoute}) => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 100 }} style={{ height: 150, width: 150 }} >
	 			<div 
	 			className="Tilt-inner pa3"> 
	 				<img style={{paddingTop: '5px'}} src={grim} alt='logo'/>
	 			</div>
			</Tilt>
		</div>
	);
}

export default Logo;