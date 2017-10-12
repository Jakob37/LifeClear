import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import TestScreen from './src/screens/TestScreen';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Test: { screen: TestScreen },
});
export default App;
