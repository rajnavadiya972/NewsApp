import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingIn from '../SettingsTab/SettingsIn';

export default function Setting(navigation){
  return (
    <SafeAreaView>
      <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "700", marginLeft: 5 ,marginBottom:10}}>Settings</Text>
      <SettingIn icon='account-circle' name='Profile' onPress={() => navigation.navigate('Login')} />
      <SettingIn icon='wallet-outline' name='Wallet' onPress={() => navigation.navigate('Login')} />
      <SettingIn icon='post-outline' name='My Post' />
      <SettingIn icon='rocket-launch-outline' name='Boost Your Post' />
      <SettingIn icon='text-box-outline' name='Terms and Conditions' />
      <SettingIn icon='head-question-outline' name='About' />
      <SettingIn icon='star-outline' name='Watch Ads & Earn' />
      <SettingIn icon='share-variant-outline' name='Refer and Earn' />
      <SettingIn icon='logout' name='Logout' />
      </SafeAreaView>
  );
};


