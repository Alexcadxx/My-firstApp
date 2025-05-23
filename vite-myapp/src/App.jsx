import { useState } from 'react';
import styles from './App.module.css';
import { formatDate } from './task1-ready/utils';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const correctValue = (val) => val.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt('Enter new value');
		console.log(promptValue);

		if (correctValue(promptValue)) {
			setValue(promptValue);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};

	const onAddButtonClick = () => {
		if (!correctValue(value)) return;
		setList((prev) => [...prev, { id: Date.now(), value, date: new Date() }]);
		setValue('');
		setError('');
	};

	const textError = <div className={styles.error}>{error}</div>;
	const isValueValid = correctValue(value);

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			{
				error !== '' && textError /* <div className={styles.error}>
				Введенное значение должно содержать минимум 3 символа
			</div> */
			}
			<div className={styles.buttonsContainer}>
				<button className={styles.buttons} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.buttons}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length > 0 ? (
					<ul className={styles.list}>
						{list.map((item) => (
							<li className={styles.listItem} key={item.id}>
								{item.value} (
								<time dateTime={item.date.toISOString()}>
									{formatDate(item.date)}
								</time>
								)
							</li>
						))}
					</ul>
				) : (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				)}
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
