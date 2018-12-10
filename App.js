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
    Pulsate.setAuthData("d34a4374a9b21fa69c092493c55db142da25285ce154244cdd26958a32b08cd3", "a656a8e295ecb4732f514542718fe615efe852a0853e906158fe8db76f27fbb5", "164686352256");
    Pulsate.startPulsateSessionForAlias("RafaelReact",
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

      Pulsate.setNewThreadButtonEnabled(true);
      Pulsate.sendLocationWithBeaconEvents(true);
      Pulsate.setLocationUpdatesEnabled(true);
      Pulsate.setInAppNotificationEnabled(true);
      Pulsate.showLastInAppNotification();
      Pulsate.setPushNotificationEnabled(true);
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
      Pulsate.setUserAuthorized(true);
      Pulsate.showLastUnauthorizedMessage();
      Pulsate.updateFirstName("ReactRafaelAndroid");
      Pulsate.updateLastName("ReactSkubiszAndroid");
      Pulsate.updateEmail("rafael.skubsz.react@pulsatehq.com");
      Pulsate.updateGender(0);
      Pulsate.updateAge("31");
      Pulsate.setPrivacy(1);
      Pulsate.createAttributeWithString("react-string", "android-react");
      Pulsate.createAttributeWithFloat("react-float", 2);
      Pulsate.createAttributeWithInt("react-int", 5);
      Pulsate.createAttributeWithBool("react-bool", true);
      Pulsate.incrementCounter("react-android-counter1", 5);
      Pulsate.decrementCounter("react-android-counter2", 3);
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
    Pulsate.setAuthData("d34a4374a9b21fa69c092493c55db142da25285ce154244cdd26958a32b08cd3", "a656a8e295ecb4732f514542718fe615efe852a0853e906158fe8db76f27fbb5", "164686352256");
    Pulsate.startPulsateSessionForAlias("PhelimReact",
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

      Pulsate.setNewThreadButtonEnabled(true);
      Pulsate.sendLocationWithBeaconEvents(true);
      Pulsate.setLocationUpdatesEnabled(true);
      Pulsate.setInAppNotificationEnabled(true);
      Pulsate.showLastInAppNotification();
      Pulsate.setPushNotificationEnabled(true);
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
      Pulsate.setUserAuthorized(true);
      Pulsate.showLastUnauthorizedMessage();
      Pulsate.updateFirstName("Phelim");
      Pulsate.updateLastName("O Brien");
      Pulsate.updateEmail("phelim.obrien.react@pulsatehq.com");
      Pulsate.updateGender(0);
      Pulsate.updateAge("30");
      Pulsate.setPrivacy(1);
      Pulsate.createAttributeWithString("react-string", "android-react");
      Pulsate.createAttributeWithFloat("react-float", 2);
      Pulsate.createAttributeWithInt("react-int", 5);
      Pulsate.createAttributeWithBool("react-bool", true);
      Pulsate.incrementCounter("react-android-counter1", 5);
      Pulsate.decrementCounter("react-android-counter2", 3);
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressRafael} title="Login Rafael" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressPhelim} title="Login Phelim" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        <View style={styles.buttonContainer}>    
          <Button onPress={this._onPressFeed} title="Show Feed" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressLogout} title="Logout" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
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
