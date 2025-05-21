import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt();
		console.log(promptValue);

		if (promptValue && promptValue.length < 3) {
			setError(error === '');
		} else {
			setValue(promptValue);
		}
	};

	const onAddButtonClick = () => {};

	const textError = (
		<div className={styles.error}>
			Введенное значение должно содержать минимум 3 символа
		</div>
	);

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			{
				error && textError /* <div className={styles.error}>
				Введенное значение должно содержать минимум 3 символа
			</div> */
			}
			<div className={styles.buttonsContainer}>
				<button className={styles.buttons} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={styles.buttons} disabled>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				<p className={styles.noMarginText}>Нет добавленных элементов</p>
				<ul className={styles.list}>
					<li className={styles.listItem}>Первый элемент</li>
				</ul>
			</div>
		</div>
	);
};

// ------------------------------------------------------------------------------------
// Использование CSS Modules
// import logo from './assets/logo.svg';
// import { MyComponent } from './MyComponent';
// import styles from './App.module.css';

// export const App = () => {
// 	// const onClick = () => {
// 	// 	console.log(123);
// 	// };

// 	return (
// 		<div className={styles.app}>
// 			<header className={styles.header} /*onClick={onClick}*/>
// 				<img src={logo} className={styles.logo} alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className={styles.link}
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<MyComponent />
// 			</header>
// 		</div>
// 	);
// };

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
