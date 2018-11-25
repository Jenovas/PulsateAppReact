/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
var PulsateManager = require('react-native-pulsate-sdk-react');
var { Pulsate } = PulsateManager;

export default class App extends React.Component {
  _onPress() {
    Pulsate.setAuthData("d34a4374a9b21fa69c092493c55db142da25285ce154244cdd26958a32b08cd3", "a656a8e295ecb4732f514542718fe615efe852a0853e906158fe8db76f27fbb5", "164686352256");
    Pulsate.startPulsateSession( (msg) => {console.log(msg)}, (err) => {console.log(err)} );
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Hello12345" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});
