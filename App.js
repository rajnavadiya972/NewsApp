// import logo from './logo1.png';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icons from 'react-native-vector-icons/SimpleLineIcons';
// import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';
import Login from './component/Login.js';
import Verify from './component/Verify';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MyTheme = {
  dark: false,
  colors: {
    background: 'rgb(255,255,255)',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}} carsS>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify" component={Verify} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


