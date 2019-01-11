/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import { Button } from 'react-native-elements';
var PulsateManager = require('react-native-pulsate-sdk-react');
var { Pulsate } = PulsateManager;

export default class App extends React.Component {
  _onPressRafael() {
    Pulsate.startPulsateSessionForAlias("RafaelSkubisz",
    (msg) => 
    {
      Alert.alert(
        'Session Status',
        'Session Success',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )

      Pulsate.sendLocationWithBeaconEvents(true);
      Pulsate.setLocationUpdatesEnabled(true);
      Pulsate.isPushNotificationEnabled(
        (msg) => 
        {
          console.log(msg);
        },
        (err) => 
        {
          console.log(err);
        }
      );
      Pulsate.updateFirstName("Rafael");
      Pulsate.updateLastName("Skubisz");
      Pulsate.updateEmail("rafael.skubsz@pulsatehq.com");
      Pulsate.updateGender(0);
      Pulsate.updateAge("28");
      Pulsate.setPrivacy(1);
      Pulsate.createAttributeWithString("ReactString", "React");
      Pulsate.createAttributeWithFloat("ReactFloat", 2.5);
      Pulsate.createAttributeWithInt("ReactInt", 5);
      Pulsate.createAttributeWithBool("ReactBool", true);
      Pulsate.incrementCounter("ReactCounter", 5);
      Pulsate.decrementCounter("ReactCounter", 3);
      Pulsate.createEvent("RafaelLoginEvent");
      Pulsate.forceAttributeSync();

      Pulsate.setUserUnauthorizedListenerAndroid(
        (msg) => 
        {
          console.log(msg);
        }
      );
      Pulsate.setUnreadCountUpdateListenerAndroid(
        (msg) => 
        {
          console.log(msg);
        }
      );

      Pulsate.isUserAuthorizedIOS(
        (msg) => 
        {
          console.log(msg);
        },
        (err) => 
        {
          console.log(err);
        }
      );
      Pulsate.startLocationIOS();
      Pulsate.startRemoteNotificationsIOS();
      Pulsate.getBadgeCountIOS();
    }, 
    (err) => 
    {
      console.log(err);
    });
  }
  
  _onPressPhelim() {
    Pulsate.startPulsateSessionForAlias("PhelimObrien",
    (msg) => 
    {
      Alert.alert(
        'Session Status',
        'Session Success',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )

      Pulsate.sendLocationWithBeaconEvents(true);
      Pulsate.setLocationUpdatesEnabled(true);
      Pulsate.isPushNotificationEnabled(
        (msg) => 
        {
          console.log(msg);
        },
        (err) => 
        {
          console.log(err);
        }
      );
      Pulsate.updateFirstName("Phelim");
      Pulsate.updateLastName("O Brien");
      Pulsate.updateEmail("phelim.obrien.react@pulsatehq.com");
      Pulsate.updateGender(0);
      Pulsate.updateAge("30");
      Pulsate.setPrivacy(1);
      Pulsate.createAttributeWithString("ReactString", "React");
      Pulsate.createAttributeWithFloat("ReactFloat", 2.5);
      Pulsate.createAttributeWithInt("ReactInt", 5);
      Pulsate.createAttributeWithBool("ReactBool", true);
      Pulsate.incrementCounter("ReactCounter", 5);
      Pulsate.decrementCounter("ReactCounter", 3);
      Pulsate.createEvent("PhelimLoginEvent");
      Pulsate.forceAttributeSync();

      Pulsate.setUserUnauthorizedListenerAndroid(
        (msg) => 
        {
          console.log(msg);
        }
      );
      Pulsate.setUnreadCountUpdateListenerAndroid(
        (msg) => 
        {
          console.log(msg);
        }
      );

      Pulsate.isUserAuthorizedIOS(
        (msg) => 
        {
          console.log(msg);
        },
        (err) => 
        {
          console.log(err);
        }
      );
      Pulsate.startLocationIOS();
      Pulsate.startRemoteNotificationsIOS();
      Pulsate.getBadgeCountIOS();
    }, 
    (err) => 
    {
      Alert.alert(
        'Session Status',
        'Session Error ' + err,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    });
  }

  _onPressFeed() {
      Pulsate.showFeed();
  }

  _onPressLogout() {
    Pulsate.logoutCurrentAlias(
      (msg) => 
        {
          Alert.alert(
            'Logout Status',
            'Logout Success',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        },
        (err) => 
        {
          Alert.alert(
            'Logout Status',
            'Logout Error ' + err,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
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

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressRafael} title="Login Rafael" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressLogout} title="Logout" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View>  
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressEnableThread} title="Enable Thread" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressEnablePush} title="Enable Push" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressEnableInApps} title="Enable InApps" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressAuthorize} title="Authorize" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
        </View>
        <View style={styles.container}>     
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressPhelim} title="Login Phelim" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View>
          <View style={styles.buttonContainer}>    
            <Button onPress={this._onPressFeed} title="Show Feed" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressDisableThread} title="Disable Thread" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressDisablePush} title="Disable Push" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressDisableInApps} title="Disable InApps" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressUnauthorize} title="Unauthorize" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    width:190,
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
