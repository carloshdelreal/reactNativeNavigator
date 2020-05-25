import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

/////
// Do not edit anything above this line
/////

const HomeScreen = props => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button title="Go to Contact Screen" onPress={() => {
      props.navigation.navigate("ContactScreen")
    }} />
  </View>
);

const ContactScreen = props => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Screen</Text>
    <Button title="Go back" onPress={() => {
      props.navigation.navigate("HomeScreen")
    }} />
  </View>
);

const AppNavigator = createStackNavigator({
  HomeScreen,
  ContactScreen,
});

export default createAppContainer(AppNavigator);
