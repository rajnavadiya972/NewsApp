import { Styles } from '@expo/config-plugins/build/android';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet,View,Image} from 'react-native';
import ProfilePhoto from '../images/logo1.png'
const MyProfile=()=>{
    return(
        <SafeAreaView>
            <View style={styles.ProfContainer}>
                <Image source={ProfilePhoto} style={{ width: 100, height: 100 ,borderRadius:100}} />
            </View>
        </SafeAreaView>
    );
}
export default MyProfile;
const styles = StyleSheet.create({
    ProfContainer:{
        alignItems:"center",
        borderWidth:1
    },
});