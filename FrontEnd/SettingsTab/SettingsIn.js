import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../component/Login';

const SettingIn = (props) => {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.mainConatainer}>
        <Icon name={props.icon} size={30} color='#68a0cf' style={styles.iconMain} />
        <Text style={styles.text}>{props.name}</Text>
        <Icon name="arrow-right" size={25} color='#68a0cf' style={styles.iconArrow} />
      </SafeAreaView>
      <View style={{ marginTop: -10, borderWidth: 1, width: "89%", marginLeft: "auto",  borderColor: "#b3afad" }}></View>
    </SafeAreaView>
  );
};

export default SettingIn;

const styles = StyleSheet.create({
  mainConatainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: "center",
    height: 50,
  },
  iconMain: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 5
  },
  iconArrow: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});