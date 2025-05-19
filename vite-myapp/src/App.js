import logo from './assets/logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const year = new Date().getFullYear();

	return createElement(
		'div',
		{ className: 'App' },
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />

			<p>
				Edit <code>src/app.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			<div>{year}</div>
		</header>,
	);
};
