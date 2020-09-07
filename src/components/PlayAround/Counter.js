import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export class Counter extends Component {
	state = {
		counter: 0,
	};
	Increment = () => {
		this.setState((prevState) => ({ counter: prevState.counter + 1 }));
	};
	Decrement = () => {
		this.setState((prevState) => ({ counter: prevState.counter - 1 }));
	};
	render() {
		return (
			<View style={styles.container}>
				<Button title="Increment" onPress={this.Increment} />
				<Text style={styles.text}> {this.state.counter} </Text>
				<Button title="Decrement" onPress={this.Decrement} />
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
		color: 'black',
		padding: 20,
		fontSize: 20,
		fontWeight: 'bold',
	},
});
