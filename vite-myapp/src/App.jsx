// Использование CSS Modules
import logo from './assets/logo.svg';
import { MyComponent } from './MyComponent';
import styles from './App.module.css';

export const App = () => {
	// const onClick = () => {
	// 	console.log(123);
	// };

	return (
		<div className={styles.app}>
			<header className={styles.header} /*onClick={onClick}*/>
				<img src={logo} className={styles.logo} alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className={styles.link}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<MyComponent />
			</header>
		</div>
	);
};

// -------------------------------------------------------------------------------------
// Файл в формате JS
//
// import { createElement } from 'react';
// export const App = () => {
// 	const year = new Date().getFullYear();

// 	return createElement(
// 		'div',
// 		{ className: 'App' },
// 		createElement(
// 			'header',
// 			{ className: 'App-header' },
// 			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
// 			createElement(
// 				'p',
// 				null,
// 				'Edit',
// 				createElement('code', null, 'src/app.js'),
// 				'and save to reload.',
// 			),
// 			createElement(
// 				'a',
// 				{
// 					className: 'App-link',
// 					href: 'https://reactjs.org',
// 					target: '_blank',
// 					rel: 'noopener noreferrer',
// 				},
// 				'Learn React',
// 			),
// 			createElement('div', null, year),
// 		),
// 	);
// };
// ------------------------------------------------------------------------------------

// Файл в формате JSX

// import logo from './logo.svg';
// import './App.css';

// export const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// };
// --------------------------------------------------------------------------------------
