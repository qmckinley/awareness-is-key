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
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render() {
		const filteredDocumentaries = this.state.documentaries.filter(documentaries => {
			return documentaries.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1>Documentaries</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<DocList documentaries={filteredDocumentaries} />
			</div>
		);
	}
}

export default App;
