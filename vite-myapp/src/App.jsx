// Выносим часть кода в отдельные файлы, но компонент остается один (бонусное задание)

import { useState } from 'react';
import { getButtons } from './get-buttons';
import styles from './app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const state = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		isResult,
		setIsResult,
	};

	const buttons = getButtons(state);

	const output = operand1 + operator + operand2;

	return (
		<div className={styles.app}>
			<div className={`${styles.screen} ${isResult ? styles.resultScreen : ''}`}>
				{output}
			</div>
			<div className={styles.buttons}>
				<div className={styles.leftGroup}>
					{buttons.map(({ id, label, group, handler }) =>
						group === 'left' ? (
							<button
								key={id}
								className={styles.button}
								onClick={() => handler(label)}
							>
								{label}
							</button>
						) : null,
					)}
				</div>

				<div className={styles.rightGroup}>
					{buttons.map(({ id, label, group, handler }) =>
						group === 'right' ? (
							<button key={id} className={styles.button} onClick={handler}>
								{label}
							</button>
						) : null,
					)}
				</div>
			</div>
		</div>
	);
};

// --------------------------------------------------------------------------------------
// Усложнение задания: Данные всех кнопок калькулятора хранить в массиве
// и выводить из него в разметку

// import { useState } from 'react';
// import styles from './App.module.css';

// export const App = () => {
// 	const [operand1, setOperand1] = useState('0');
// 	const [operator, setOperator] = useState('');
// 	const [operand2, setOperand2] = useState('');
// 	const [isResult, setIsResult] = useState(false);

// 	const handleNum = (label) => {
// 		setIsResult(false);
// 		if (operator === '') {
// 			if (operand1 === '0') {
// 				setOperand1(label);
// 			} else {
// 				setOperand1(operand1 + label);
// 			}
// 		} else {
// 			if (operand2 === '0') {
// 				setOperand2(label);
// 			} else {
// 				setOperand2(operand2 + label);
// 			}
// 		}
// 	};

// 	const handleReset = () => {
// 		setOperand1('0');
// 		setOperator('');
// 		setOperand2('');
// 		setIsResult(false);
// 	};

// 	const handlePlus = () => {
// 		setOperator('+');
// 		setIsResult(false);
// 	};

// 	const handleMinus = () => {
// 		setOperator('-');
// 		setIsResult(false);
// 	};

// 	const handleResult = () => {
// 		setOperator('');
// 		setIsResult(true);
// 		if (operand2 !== '') {
// 			switch (operator) {
// 				case '+': {
// 					setOperand1(Number(operand1) + Number(operand2));
// 					break;
// 				}
// 				case '-': {
// 					setOperand1(Number(operand1) - Number(operand2));
// 					break;
// 				}
// 				default:
// 				// Ничего не делаем
// 			}
// 			setOperand2('');
// 		}
// 	};

// 	const buttons = [
// 		{ id: '1', label: '1', group: 'left', handler: handleNum },
// 		{ id: '2', label: '2', group: 'left', handler: handleNum },
// 		{ id: '3', label: '3', group: 'left', handler: handleNum },
// 		{ id: '4', label: '4', group: 'left', handler: handleNum },
// 		{ id: '5', label: '5', group: 'left', handler: handleNum },
// 		{ id: '6', label: '6', group: 'left', handler: handleNum },
// 		{ id: '7', label: '7', group: 'left', handler: handleNum },
// 		{ id: '8', label: '8', group: 'left', handler: handleNum },
// 		{ id: '9', label: '9', group: 'left', handler: handleNum },
// 		{ id: '0', label: '0', group: 'left', handler: handleNum },
// 		{ id: '+', label: '+', group: 'right', handler: handlePlus },
// 		{ id: '-', label: '-', group: 'right', handler: handleMinus },
// 		{ id: '=', label: '=', group: 'right', handler: handleResult },
// 		{ id: 'C', label: 'C', group: 'right', handler: handleReset },
// 	];

// 	const output = operand1 + operator + operand2;

// 	return (
// 		<div className={styles.app}>
// 			<div className={`${styles.screen} ${isResult ? styles.resultScreen : ''}`}>
// 				{output}
// 			</div>
// 			<div className={styles.buttons}>
// 				<div className={styles.leftGroup}>
// 					{buttons.map(({ id, label, group, handler }) =>
// 						group === 'left' ? (
// 							<button
// 								key={id}
// 								className={styles.button}
// 								onClick={() => handler(label)}
// 							>
// 								{label}
// 							</button>
// 						) : null,
// 					)}
// 				</div>

// 				<div className={styles.rightGroup}>
// 					{buttons.map(({ id, label, group, handler }) =>
// 						group === 'right' ? (
// 							<button key={id} className={styles.button} onClick={handler}>
// 								{label}
// 							</button>
// 						) : null,
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// --------------------------------------------------------------------------------------
// Код основного задания

// import { useState } from 'react';
// import styles from './App.module.css';

// export const App = () => {
// 	const [operand1, setOperand1] = useState('0');
// 	const [operator, setOperator] = useState('');
// 	const [operand2, setOperand2] = useState('');
// 	const [isResult, setIsResult] = useState(false);

// 	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// 	const output = operand1 + operator + operand2;

// 	return (
// 		<div className={styles.app}>
// 			<div className={`${styles.screen} ${isResult ? styles.resultScreen : ''}`}>
// 				{output}
// 			</div>
// 			<div className={styles.buttons}>
// 				<div className={styles.leftGroup}>
// 					{NUMS.map((numb) => (
// 						<button
// 							className={styles.button}
// 							onClick={() => {
// 								setIsResult(false);
// 								if (operator === '') {
// 									if (operand1 === '0') {
// 										setOperand1(numb);
// 									} else {
// 										setOperand1(operand1 + numb);
// 									}
// 								} else {
// 									if (operand2 === '0') {
// 										setOperand2(numb);
// 									} else {
// 										setOperand2(operand2 + numb);
// 									}
// 								}
// 							}}
// 						>
// 							{numb}
// 						</button>
// 					))}
// 				</div>

// 				<div className={styles.rightGroup}>
// 					<button
// 						className={styles.button}
// 						onClick={() => {
// 							setOperand1('0');
// 							setOperator('');
// 							setOperand2('');
// 							setIsResult(false);
// 						}}
// 					>
// 						C
// 					</button>
// 					<button
// 						className={styles.button}
// 						onClick={() => {
// 							setOperator('-');
// 							setIsResult(false);
// 						}}
// 					>
// 						-
// 					</button>
// 					<button
// 						className={styles.button}
// 						onClick={() => {
// 							setOperator('+');
// 							setIsResult(false);
// 						}}
// 					>
// 						+
// 					</button>
// 					<button
// 						className={styles.button}
// 						onClick={() => {
// 							setOperator('');
// 							setIsResult(true);
// 							if (operand2 !== '') {
// 								switch (operator) {
// 									case '+': {
// 										setOperand1(Number(operand1) + Number(operand2));
// 										break;
// 									}
// 									case '-': {
// 										setOperand1(Number(operand1) - Number(operand2));
// 										break;
// 									}
// 									default:
// 									// Ничего не делаем
// 								}
// 								setOperand2('');
// 							}
// 						}}
// 					>
// 						=
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
