import React, { Component } from 'react';
import DocList from './DocList'
import { documentaries } from './documentaries'
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			documentaries: [],
			searchfield: ''
		}
	}
	componentDidMount() {
		this.setState({ documentaries: documentaries });
		console.log(documentaries);
	}
	onSearchChange = (event) => {
		debugger;
		this.setState({ searchfield: event.target.value });
		console.log(documentaries);
		// console.log(filteredDocs);
		
	}
	render() {
		// const filteredDocs = this.state.documentaries.filter((doc, i) => {
		// 	return documentaries.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// });
		console.log(documentaries);
		return (
			<div className='tc'>
				<h1>Documentaries</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<DocList documentaries={this.state.documentaries} />
			</div>
		);
	}
}

export default App;


