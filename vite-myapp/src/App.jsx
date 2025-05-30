import { Children } from 'react';
import styles from './app.module.css';
import { User } from './components';
import { Label } from './components/label/label';

const getUserFromServer = () => ({
	name: 'Иван',
	age: 25,
	email: 'ivan@mail.ru',
	phone: '+7999-999-99-99',
});

export const App = () => {
	const user = getUserFromServer();

	return (
		<div className={styles.app}>
			{/* Без children */}
			{/* <Label title={'Приложение'} tema={'redd'} />  */}

			{/* C children */}
			<Label tema={'redd'}>Приложение</Label>

			<div>Разная информация приложения</div>
			{/* <User name={user.name} age={user.age} email={user.email} phone={user.phone} /> */}
			<User {...user} />
		</div>
	);
};
// --------------------------------------------------------------------------------------
