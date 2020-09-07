import React from 'react';
import { Text, View } from 'react-native';


export class AppText extends React.Component {
    render() { 
        const Em = <Text>Hiiiii</Text>;
        const chek = false;
        return (
                <Text {...this.props} style={[{ color: 'red' }, this.props.style]} />
         )
    }
}