import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import Calculator from './assets/Calculator';

export default class App extends Component {
  render()
  {
    return (
      <View style={styles.container}>
        <Calculator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    
  },
});
