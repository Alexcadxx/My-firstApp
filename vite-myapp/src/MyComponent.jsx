// Условный рендеринг css стилей, вывод определенных стилей от определенного события
import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [showRedText, setShowRedText] = useState(false);

	const onClick = () => {
		setShowRedText(!showRedText);
	};

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>;

	return (
		<>
			{text}
			<button onClick={onClick}>Изменить цвет текста</button>
		</>
	);
};
// ------------------------------------------------------------------------------------

// Условный рендеринг, вывод текста или его скрытие при выполнении определенного события
// import { useState } from 'react';

// export const MyComponent = () => {
// 	const [showText, setShowText] = useState(true);

// 	const onClick = () => {
// 		setShowText(!showText);
// 	};

// 	const text = <div>Текст</div>;

// 	return (
// 		<>
// 			{showText && text}
// 			<button onClick={onClick}>{showText ? 'Скрыть' : 'Показать'} Текст</button>
// 		</>
// 	);
// };
// -----------------------------------------------------------------------------------

// Пример изменения состояния объекта через функцию callback
// import { useState } from 'react';

// export const MyComponent = () => {
// 	const [value, setValue] = useState(0);

// 	const onClick = (event) => {
// 		setValue((value) => value + 1);
// 		setValue((value) => value + 1);
// 		setValue((value) => value + 1);
// 		console.log(event);
// 	};

// 	return (
// 		<>
// 			<div>{value}</div>
// 			<button onClick={onClick}>Прибавить +1</button>
// 		</>
// 	);
// };
// -----------------------------------------------------------------------------------

// Рендеринг списков
// const product = [
// 	{ id: 'qwe', name: 'Чайник' },
// 	{ id: 'rty', name: 'Утюг' },
// ];

// export const MyComponent = () => {
// 	return (
// 		<ul>
// 			{product.map(({ id, name }) => (
// 				<li key={id}>{name}</li>
// 			))}
// 		</ul>
// 	);
// };
// -------------------------------------------------------------------------------------

// Рендеринг изменения состояния в React на примере времени
// import { useState } from 'react';

// const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

// export const MyComponent = () => {
// 	const [currentDate, setCurrentDate] = useState(new Date());

// 	setTimeout(() => {
// 		setCurrentDate(new Date());
// 	}, 1000);

// 	return <div>{getTimeFromDate(currentDate)}</div>;
// };
// -------------------------------------------------------------------------------------

// Первый пример рендеринга текста в компоненте
// 	const tagName = 'div';
// 	const getValue = () => 123;

// 	return (
// 		<>
// 			<label>Значение</label>
// 			<div
// 				className={tagName + 'Element'}
// 				style={{ width: '100px', marginTop: '20px', color: 'yellow' }}
// 			>
// 				{getValue()}
// 			</div>
// 		</>
// 	);
// };
