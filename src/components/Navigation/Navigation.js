import React, { Component } from 'react';

const Navigation = ({ onRouteChange, isloggedin }) => {
		if(isloggedin) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('isloggedout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
				</nav>
			);
			
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('login')} className='f3 link dim black underline pa3 pointer'>Login</p>
					<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
				</nav>
			);
		
		}
}

export default Navigation;