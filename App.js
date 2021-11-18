import React, { Component } from 'react';

import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  
  constructor(props) {
      super(props);

      let id = 'User ' + this.generateRandomNumber(1, 100);
      this.state = { 
          identity: id
      };
  }

  createAlert = () =>
      Alert.alert(
      "Bitrise POC App",
      "Hello "+this.state.identity+"!",
      [
          { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
  );

  generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.text}>Bitrise React Native POC</Text>
              <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this.createAlert}>
                  <Text style={styles.buttonText}>Push Me!</Text>
              </TouchableOpacity>
          </View>
      );
  };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold'
    },
    card: {
      width: 350,
      height: 100,
      borderRadius: 10,
      backgroundColor: '#101010',
      margin: 10,
      padding: 10,
      alignItems: 'center'
    },
    cardText: {
      fontSize: 18,
      color: '#ffd700',
      marginBottom: 5
    },
    buttonContainer: {
      backgroundColor: '#222',
      borderRadius: 5,
      padding: 10,
      margin: 20
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    }
  })