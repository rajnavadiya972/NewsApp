import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-web';
import SettingIn from '../SettingsTab/SettingsIn';

export default function Setting({ navigation }) {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "700", marginLeft: 5, marginBottom: 10 }}>Settings</Text>

      <Pressable onPress={() => navigation.navigate('SettingProfile')}>
        <SettingIn icon='account-circle' name='Profile' />
      </Pressable>

      <SettingIn icon='wallet-outline' name='Wallet' />

      <SettingIn icon='post-outline' name='My Post' />

      <Pressable onPress={() => navigation.navigate('BoostPost')}>
        <SettingIn icon='rocket-launch-outline' name='Boost Your Post' />
      </Pressable>

      <SettingIn icon='text-box-outline' name='Terms and Conditions' />

      <SettingIn icon='head-question-outline' name='About' />

      <SettingIn icon='star-outline' name='Watch Ads & Earn' />

      <SettingIn icon='share-variant-outline' name='Refer and Earn' />

      <Pressable onPress={() => navigation.navigate('Login')}>
        <SettingIn icon='logout' name='Logout' />
      </Pressable>
    </SafeAreaView>
  );
};


