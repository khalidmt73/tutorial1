import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from './src/components/AppButton';
import {Counter} from './src/components/PlayAround/Counter'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Counter />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color:'gold',
	},
});
