import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Bug from './bugs/4';

export default class App extends React.Component {
  render() {
    return <NavigationContainer><Bug /></NavigationContainer>;
  }
}
