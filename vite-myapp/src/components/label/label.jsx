import styles from './label.module.css';

// Без children
// export const Label = ({ title, tema }) => {
// 	return <label className={`${styles.label} ${styles[tema]}`}>{title}:</label>;
// };
// ---------------------------------------------------------------------------------

// C children
export const Label = ({ tema, children }) => {
	return <label className={`${styles.label} ${styles[tema]}`}>{children}:</label>;
};
