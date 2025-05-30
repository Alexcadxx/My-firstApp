import { Contacts } from '../contacts/contacts';
import { Label } from '../label/label';
import styles from './user.module.css';

export const User = ({ name, age, ...cont }) => {
	return (
		<div className={styles.user}>
			{/* Без children */}
			{/* <Label title={'Пользователь'} tema={'blue'} /> */}

			{/* C children */}
			<Label tema={'blue'}>Пользователь</Label>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<Contacts {...cont} />
		</div>
	);
};
