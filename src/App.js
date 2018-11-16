import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchTodo from './api/todo';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: '',
		};
	}

	async componentDidMount() {
		const res = await fetchTodo();
		this.setState({ todo: res });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{this.state.todo}</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
