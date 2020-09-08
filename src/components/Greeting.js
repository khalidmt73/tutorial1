import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Greeting extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}

export default class ViewGreeting extends Component {

    render() {
        return (
            <Greeting name="Hi "/>

    )

    }
}
