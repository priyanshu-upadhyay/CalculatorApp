import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <View style={styles.buttonComponent}>
        <View style={styles.buttonLeftArea}>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>AC</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>DEL</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>%</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>7</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>8</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>9</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>4</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>5</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>6</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>1</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>2</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>3</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>H</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>0</Text>
          </Pressable>
          <Pressable style={styles.leftSideButtons}>
            <Text style={styles.buttonTextLeft}>.</Text>
          </Pressable>
        </View>

        <View style={styles.buttonRightArea}>

        <Pressable style={styles.rightSideButtons}>
            <Text style={styles.buttonTextRight}>÷</Text>
          </Pressable>
        <Pressable style={styles.rightSideButtons}>
            <Text style={styles.buttonTextRight}>×</Text>
          </Pressable>
        <Pressable style={styles.rightSideButtons}>
            <Text style={styles.buttonTextRight}>-</Text>
          </Pressable>
        <Pressable style={styles.rightSideButtons}>
            <Text style={styles.buttonTextRight}>+</Text>
          </Pressable>
        <Pressable style={styles.rightSideButtons}>
            <Text style={styles.buttonTextRight}>=</Text>
          </Pressable>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonComponent: {
    flex: 7,
    // borderWidth: 1,
    // borderColor: "green",
    flexDirection: "row",
  },
  buttonLeftArea: {
    flex: 8,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonRightArea: {
    flex: 2,
    borderWidth: 1,
    borderColor: "black",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  leftSideButtons: {
    width: "33.33%",
    height: "20%",
    borderWidth: 1,
    borderColor: "black",
    justifyContent:"center",
    alignItems:"center",
  },
  buttonTextLeft: {
    fontSize: 30,
  },
  rightSideButtons:{
    borderWidth: 1,
    borderColor: "black",
    height:"20%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"lightgrey",
  },
  buttonTextRight:{
    fontSize: 35,
    fontWeight:"bold"
  },
});
