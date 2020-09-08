import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { AddToCartButton } from './src/components/AddTOCartButton';
import ViewGreeting from './src/components/Greeting'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				
				<Image
					source={{
						uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Atlas_from_boston_dynamics.jpg'}}
					style={{width: 300, height: 500	}}
				/>
				<Image source={ require('./assets/icon.png')}/>
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
		color: 'gold',
	},
});
	