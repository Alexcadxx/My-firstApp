export const handleResult = ({
	setOperator,
	setIsResult,
	operand2,
	operator,
	setOperand1,
	operand1,
	setOperand2,
}) => {
	setOperator('');
	setIsResult(true);
	if (operand2 !== '') {
		switch (operator) {
			case '+': {
				setOperand1(Number(operand1) + Number(operand2));
				break;
			}
			case '-': {
				setOperand1(Number(operand1) - Number(operand2));
				break;
			}
			case '*': {
				setOperand1(Number(operand1) * Number(operand2));
				break;
			}
			case '/': {
				setOperand1(Number(operand1) / Number(operand2));
				break;
			}
			default:
			// Ничего не делаем
		}
		setOperand2('');
	}
};
