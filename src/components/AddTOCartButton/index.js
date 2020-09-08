import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppButton } from '../AppButton';
import styles from './styles';

export class AddToCartButton extends Component {
	state = {
		quantity: 0,
	};

	incrementQuantity = () => {
		this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
	};

	decrementQuantity = () => {
		this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
	};

	renderInitialButton = () => {
		return <AppButton onPress={this.incrementQuantity} title="ADD TO CART" />;
	};

	renderIncreaseDecreaseButton = () => {
		return (
			<View style={[styles.increaseDecreaseButton, styles.wrapper]}>
				<Text onPress={this.decrementQuantity} style={styles.plusMinus}>
					-
				</Text>
				<Text>{this.state.quantity}</Text>
				<Text onPress={this.incrementQuantity} style={styles.plusMinus}>
					+
				</Text>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.wrapper}>
				{this.state.quantity === 0 ? this.renderInitialButton() : this.renderIncreaseDecreaseButton()}
			</View>
		);
	}
}
