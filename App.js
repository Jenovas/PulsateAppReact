/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { PermissionsAndroid } from 'react-native';
var PulsateManager = require('react-native-pulsate-sdk-react');
var { Pulsate } = PulsateManager;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: '',
      firstname: '',
      lastname: '',
      email: '',
      attrName: '',
      attrValue: '',
      eventName: ''
    };
  }

  async requestLocationPermission() {
    const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {

    } else {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'Cool Location App required Location permission',
            'message': 'We required Location permission in order to get device location ' +
              'Please grant us.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        } else {

        }
      } catch (err) {
        alert(err)
      }
    }
  };

  _onPressFeed() {
    Pulsate.showFeed();
  }

  _onPressLogout() {
    Pulsate.logoutCurrentAlias(
      (msg) => {
        Alert.alert(
          'Logout Status',
          'Logout Success',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
      },
      (err) => {
        Alert.alert(
          'Logout Status',
          'Logout Error ' + err,
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
      }
    );
  }

  _onPressEnableThread() {
    Pulsate.setNewThreadButtonEnabled(true);
  }

  _onPressDisableThread() {
    Pulsate.setNewThreadButtonEnabled(false);
  }

  _onPressEnablePush() {
    Pulsate.setPushNotificationEnabled(true);
  }

  _onPressDisablePush() {
    Pulsate.setPushNotificationEnabled(false);
  }

  _onPressEnableInApps() {
    Pulsate.setInAppNotificationEnabled(true);
    Pulsate.showLastInAppNotification();
  }

  _onPressDisableInApps() {
    Pulsate.setInAppNotificationEnabled(false);
  }

  _onPressAuthorize() {
    Pulsate.setUserAuthorized(true);
    Pulsate.showLastUnauthorizedMessage();
  }

  _onPressUnauthorize() {
    Pulsate.setUserAuthorized(false);
  }

  _onPressNetwork() {
    Pulsate.showNetworkAndroid(false);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View>
          <View>
            <TextInput style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType="done"
              onChangeText={(value) => this.setState({ alias: value })}
              value={this.state.alias}
              placeholder='Alias'
              placeholderTextColor='rgba(225,225,225,0.7)' />
            <TextInput style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType="done"
              onChangeText={(value) => this.setState({ firstname: value })}
              value={this.state.firstname}
              placeholder='First Name'
              placeholderTextColor='rgba(225,225,225,0.7)' />
            <TextInput style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType="done"
              onChangeText={(value) => this.setState({ lastname: value })}
              value={this.state.lastname}
              placeholder='Last Name'
              placeholderTextColor='rgba(225,225,225,0.7)' />
            <TextInput style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType="done"
              onChangeText={(value) => this.setState({ email: value })}
              value={this.state.email}
              placeholder='Email'
              placeholderTextColor='rgba(225,225,225,0.7)' />
            <TouchableOpacity style={styles.loginContainer}
              onPress={() => {
                Pulsate.startPulsateSessionForAlias(this.state.alias,
                  (msg) => {
                    Alert.alert(
                      'Session Status',
                      'Session Success',
                      [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                      ],
                      { cancelable: false }
                    )

                    this.requestLocationPermission();

                    if (this.state.firstname.trim() != '' && this.state.firstname.trim().length != 0)
                      Pulsate.updateFirstName(this.state.firstname);

                    if (this.state.lastname.trim() != '' && this.state.lastname.trim().length != 0)
                      Pulsate.updateLastName(this.state.lastname);

                    if (this.state.email.trim() != '' && this.state.email.trim().length != 0)
                      Pulsate.updateEmail(this.state.email);

                    Pulsate.forceAttributeSync();
                  },
                  (err) => {
                    console.log(err);
                  });
              }
              }>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.nextContainer}>
            <TouchableOpacity style={styles.loginContainer}
              onPress={this._onPressFeed}>
              <Text style={styles.loginText}>SHOW FEED</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginContainer}
              onPress={this._onPressNetwork}>
              <Text style={styles.loginText}>SHOW NETWORK LOGS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.nextContainer}>
            <View style={styles.row}>
              <TextInput style={styles.inputRow}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="done"
                onChangeText={(value) => this.setState({ attrName: value })}
                value={this.state.attrName}
                placeholder='String Name'
                placeholderTextColor='rgba(225,225,225,0.7)' />
              <TextInput style={styles.inputRow}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="done"
                onChangeText={(value) => this.setState({ attrValue: value })}
                value={this.state.attrValue}
                placeholder='String Value'
                placeholderTextColor='rgba(225,225,225,0.7)' />
            </View>

            <TouchableOpacity style={styles.buttonRow}
              onPress={() => {
                Pulsate.createAttributeWithString(this.state.attrName, this.state.attrValue);
                Pulsate.forceAttributeSync();
              }
              }>
              <Text style={styles.loginText}>SEND ATTRIBUTES</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.nextContainer}>
            <TextInput style={styles.inputRow}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType="done"
              onChangeText={(value) => this.setState({ eventName: value })}
              value={this.state.eventName}
              placeholder='Event Name'
              placeholderTextColor='rgba(225,225,225,0.7)' />

            <TouchableOpacity style={styles.buttonRow}
              onPress={() => {
                Pulsate.createEvent(this.state.eventName);
              }
              }>
              <Text style={styles.loginText}>SEND EVENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.nextContainer}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressEnableThread}>
                <Text style={styles.loginText}>ENABLE THREAD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressDisableThread}>
                <Text style={styles.loginText}>DISABLE THREAD</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressEnablePush}>
                <Text style={styles.loginText}>ENABLE PUSH</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressDisablePush}>
                <Text style={styles.loginText}>DISABLE PUSH</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressEnableInApps}>
                <Text style={styles.loginText}>ENABLE INAPPS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressDisableInApps}>
                <Text style={styles.loginText}>DISABLE INAPPS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressAuthorize}>
                <Text style={styles.loginText}>AUTHORIZE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow}
                onPress={this._onPressUnauthorize}>
                <Text style={styles.loginText}>UNAUTHORIZE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: '#104858'
  },
  nextContainer: {
    marginTop: 50,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  loginContainer: {
    backgroundColor: '#2980b6',
    marginBottom: 10,
    padding: 10
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  buttonRow: {
    flex: 1,
    height: 40,
    backgroundColor: '#2980b6',
    marginBottom: 10,
    padding: 10
  },
  inputRow: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  }
});
