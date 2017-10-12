import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class TestScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex:1}}>
                <Text>Test screen!</Text>
            </View>
        );
    }
}