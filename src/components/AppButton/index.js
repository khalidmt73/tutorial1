import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { PlatformTouchable } from '../PlatformTouchable';
import styles from './styles';

export class AppButton extends Component {
	render() {
		const { title, titleStyle, wrapperStyle, isLoading, ...rest } = this.props;
		return (
			<PlatformTouchable disabled={isLoading} {...rest} style={[styles.wrapper, wrapperStyle]}>
				{isLoading ? <ActivityIndicator /> : <Text style={[styles.title, titleStyle]}>{title}</Text>}
			</PlatformTouchable>
		);
	}
}
