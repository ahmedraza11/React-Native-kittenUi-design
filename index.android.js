/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './src/components/login/login';
import Profile from './src/components/profile/profile';
import { navigation } from './src/AppNavigation/navigation';

import {
  AppRegistry,
  View,
} from 'react-native';

export default class projectNew extends Component {
  render() {
    return (
      <View>
        {/* <Login /> */}
        <Profile />
      </View>

    );
  }
}

AppRegistry.registerComponent('projectNew', () => navigation);
