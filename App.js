import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlatformTouchable } from './src/components/PlatformTouchable';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<PlatformTouchable>
					<Text>Click ME Now</Text>
				</PlatformTouchable>	
			</View>
		);
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
