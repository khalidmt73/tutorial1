import React from 'react';
import { Text, View } from 'react-native';

export class AppText extends React.Component {
	render() {
		return <Text {...this.props} style={[{ color: 'red' }, this.props.style]} />;
	}
}
