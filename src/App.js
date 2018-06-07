import React, { Component } from 'react';
import CardList from './CardList';
import { waifu } from './waifu';
import SearchBox from './SearchBox';
import './App.css';




class App extends Component {
	constructor() {
		super()
		this.state = {
			waifu: waifu,
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const filteredWaifu = this.state.waifu.filter(waifu => {
			return waifu.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>Best Waifu</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList waifu={filteredWaifu} />
			</div>
		);
	}
}

export default App;