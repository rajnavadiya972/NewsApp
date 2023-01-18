import logo from '../images/logo1.png';
import GoogleSignin from './GoogleSignUp';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';


export default function Login({ navigation }) {
    const [userName, setuserName] = useState("");
    const [passSet, setPassSet] = useState(false);
    var passEye;
    if (passSet) {
        passEye = <Icon name="visibility" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setPassSet(false)} />;
    } else {
        passEye = <Icon name="visibility-off" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setPassSet(true)} />
    }

    return (
        <ScrollView style={styles.maincontainer}>
            <View style={styles.container}>
                <Text style={{ marginTop: 40, fontSize: 20, fontWeight: "600" }}>World News</Text>
                <Image source={logo}
                    style={{ width: 250, height: 200 }}
                />
            </View>
            <View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput
                        style={styles.textfild}
                        placeholder="Username"
                        selectionColor={'black'}
                        value={userName}
                        onChangeText={usernameText => setuserName(usernameText)}
                    />
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.textfild}
                        placeholder="Email"
                        autoCapitalize="none"
                        selectionColor={'black'}
                    />
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Password</Text>
                    <View>
                        <TextInput
                            style={styles.textfildPass}
                            placeholder="Password"
                            selectionColor={'black'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={!passSet}
                        />
                        {passEye}
                    </View>
                    <Text style={{ marginLeft: 'auto', marginRight: 10, marginTop: 10, color: '#68a0cf' }} onPress={() => navigation.navigate('Verify')}>Forgot Password?</Text>
                </View>
            </View>
            <Pressable
                onPress={()=>navigation.navigate("BottomHome")}
                style={styles.submit}
                underlayColor='#fff'
                android_ripple={{ color: '#fff' }}>
                <Text style={styles.submitText}>Sign In</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginHorizontal: 10 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                    <Text style={{ width: 110, textAlign: 'center' }}>or sign in with</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 10 }}>
                {/* <Icons name="social-google" style={{ marginLeft: 'auto', marginRight: 'auto' }} size={25} />
                <Icons name="social-facebook" style={{ marginLeft: 'auto', marginRight: 'auto' }} size={25} />
                <Icon name="mail-outline" style={{ marginLeft: 'auto', marginRight: 'auto' }} size={25} /> */}
                <GoogleSignin />
            </View>
            <View style={{ marginTop: 15, marginBottom: 15 }}>
                <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>Don't have account? <Text style={{ fontWeight: '600' ,color:'#68a0cf'}} onPress={() => navigation.navigate('Register')}>Register</Text></Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInfo: {
        marginTop: 30
    },
    textfild: {
        height: 40,
        fontSize: 15,
        backgroundColor: 'white',
        borderColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderWidth: 1,
        marginHorizontal: 10,
    },
    textfildPass: {
        height: 40,
        minWidth: '85%',
        fontSize: 15,
        backgroundColor: 'white',
        borderColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderWidth: 1,
        marginHorizontal: 10,
    },
    text: {
        marginLeft: 10,
        fontWeight: '500'
    },
    submit: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '40%',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
});