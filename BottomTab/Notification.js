import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Notification = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text>Notification!</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});