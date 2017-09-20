/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './src/components/login/login';
import {
  AppRegistry,
  View,
} from 'react-native';

export default class projectNew extends Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

AppRegistry.registerComponent('projectNew', () => projectNew);
