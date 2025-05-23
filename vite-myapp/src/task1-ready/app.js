import { useState } from 'react';
import { formatDate } from './utils';
import styles from './app.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const validate = (val) => val.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt();
		if (validate(promptValue)) {
			setValue(promptValue);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};

	const onAddButtonClick = () => {
		if (!validate(value)) return;
		setList((prev) => [...prev, { id: Date.now(), value, date: new Date() }]);
		setValue('');
		setError('');
	};

	const isValueVaild = validate(value);

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					onClick={onAddButtonClick}
					disabled={!isValueVaild}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length > 0 ? (
					<ul className={styles.list}>
						{list.map((item) => (
							<li className={styles['list-item']} key={item.id}>
								{item.value} (
								<time dateTime={item.date.toISOString()}>
									{formatDate(item.date)}
								</time>
								)
							</li>
						))}
					</ul>
				) : (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
