import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex:1}}>
                <Text>Random stuffz!</Text>
                <Button
                    title="Join a Calendar"
                    onPress={() =>
		          		navigate('Calendar')
		        	}
                />
            </View>
        );
    }
}