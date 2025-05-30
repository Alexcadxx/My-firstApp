import { Label } from '../label/label';
// import styles from './contact.module.css';

export const Contacts = ({ email, phone }) => {
	return (
		<div>
			{/* Без children */}
			{/* <Label title={'Контакты'} tema={'green'} /> */}

			{/* C children */}
			<Label tema={'green'}>Контакты</Label>
			<div>Почта: {email}</div>
			<div>Телефон: {phone}</div>
		</div>
	);
};
