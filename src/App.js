import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Particles from 'react-particles-js';
import Login from './Login.js';
import Register from './Register.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'login',
			isloggedin: false
		}
	}


	onRouteChange = (route) => {
		if (route === 'isloggedout') {
			this.setState({isloggedin: false})
		} else if (route === 'home') {
			this.setState({isloggedin: true})
		}
		this.setState({route: route});
		
	}

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
	            		},
	            		interactivity: {
	            			detect_on: 'canvas',
	            			events: {
	            				onhover: {
	            					enable: true,
	            					mode: 'repulse'
	            				}
	            			}
	            		}
	            	}}
	            />

	        <Navigation isloggedin={this.state.isloggedin} onRouteChange={this.onRouteChange} />
	        { 
	            this.state.route === 'home' ?
					<div>
						
						<Logo />
						
					</div>
				: (
					this.state.route === 'login' ?
					<Login onRouteChange={this.onRouteChange}/>
					: <Register onRouteChange={this.onRouteChange} /> 
				)
				
			}
			</div> 
		);
	}
}

export default App;