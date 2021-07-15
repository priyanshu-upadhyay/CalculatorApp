import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./Button";
import Screen from "./Screen";
export default class Calculator extends Component {
  render() {
    return (
      <View style={styles.calculatorComponent}>
        <Screen />
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculatorComponent: {
    flex: 1,
    // backgroundColor: "yellow",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
