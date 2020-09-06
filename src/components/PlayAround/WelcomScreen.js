import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WelcomScreenMainText } from './WelcomScreenMainText';
import { WelcomeScreenMainButton } from './WelcomeScreenMainButton';

import { styles } from './styles';

export class WelcomScreen extends React.Component {
	render() {
		return (
			<View style={StyleSheet.screenContainer}>
				<View style={StyleSheet.wrapper}>
					<WelcomScreenMainText />
				</View>
				<WelcomeScreenMainButton />
				<View style={StyleSheet.wrapper} />
			</View>
		);
	}
}
