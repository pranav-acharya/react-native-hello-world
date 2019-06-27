import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
// ref: https://github.com/StephenGrider/AdvancedReactNative
// You can import from local files
import AssetExample from './components/AssetExample';
import DummyComponent from './components/DummyComponent';
import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import StateConnectedScreen from './screens/StateConnectedScreen';


export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      Welcome: WelcomeScreen,
      Connected: StateConnectedScreen
    }, {
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    });
    
    const AppContainer = createAppContainer(MainNavigator)

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
