import { StyleSheet } from 'react-native';

const buttonColor = '#bbb';
const textColor = 'white';

const styles = StyleSheet.create({
	wrapper: {
		minWidth: 200,
		minHeight: 50,
	},
	increaseDecreaseButton: {
		flexDirection: 'row',
		backgroundColor: buttonColor,
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: buttonColor,
	},
	text: {
		fontSize: 24,
	},
	plusMinus: {
		padding: 10,
	},
});
export default styles;
