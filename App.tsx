import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Products from './pages/products';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }


  render() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products" component={Products} />
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
