import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const clickNext = () => {
		setActiveIndex((point) => point + 1);
	};

	const clickBack = () => {
		if (activeIndex > 0) {
			setActiveIndex((point) => point - 1);
		}
	};

	const clickReset = () => {
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const isLastStep = activeIndex === steps.length - 1;
	const isFirstStep = activeIndex === 0;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{steps[activeIndex].content}
						{/* Контент соответственный шагу. Сейчас активен шаг 3 */}
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{steps.map(({ title, id }, index) => (
							<li
								key={id}
								className={
									styles['steps-item'] +
									(index === activeIndex ? `${styles.active}` : '') +
									(index < activeIndex ? `${styles.done}` : '')
								}
							>
								{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{''}
								{/* При клике на кнопку установка выбранного шага в качестве активного */}
								{title}
								{/* Шаг 1 */}
							</li>
						))}

						{/* <li className={styles['steps-item'] + ' ' + styles.done}>
							<button className={styles['steps-item-button']}>2</button>
							Шаг 2
						</li>
						<li
							className={
								styles['steps-item'] +
								' ' +
								styles.done +
								' ' +
								styles.active
							}
						>
							<button className={styles['steps-item-button']}>3</button>
							Шаг 3
						</li>
						<li className={styles['steps-item']}>
							<button className={styles['steps-item-button']}>4</button>
							Шаг 4
						</li> */}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={clickBack}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={() => (isLastStep ? clickReset() : clickNext())}
						>
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

// -------------------------------------------------------------------------------------
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
