import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Particles from 'react-particles-js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Particles className='particles'
	              params={{
	            		particles: {
	            			number: {
	            				value: 100,
	            				density: {
	            					enable: true,
	            					value_area: 800
	            				}
	            			}
	            		}
	            	}}
	            />
				<Navigation />
				<Logo />
			</div>
		);
	}
}

export default App;