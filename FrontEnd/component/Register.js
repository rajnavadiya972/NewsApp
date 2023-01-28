import logo from '../images/logo1.png';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';

import {Formik} from 'formik'
import * as Yup from 'yup'

export default function Verify() {
    const isValidObjectField = (obj) => {
        return Object.values(obj).every(value => value.trim())
    }

    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
            stateUpdater('');
        }, 2500);
    }

    const isValidEmail = (value) => {
        const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regx.test(value);
    }

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('')
    const { username, email, password, confirmPassword } = userInfo;

    const handeOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value })
    }

    const isValidForm = () => {
        if (!isValidObjectField(userInfo)) return updateError('Required all fields', setError);

        if (!username.trim() || username.length < 3) return updateError('Invalid name!', setError);

        if (!isValidEmail(email)) return updateError('Invalid email!', setError);

        if (!password.trim() || password.length < 8) return updateError('password is less then 8 character!', setError);

        if (password !== confirmPassword) return updateError('password does not same!', setError);

        return true;
    }

    const submitForm = () => {
        if (isValidForm()) {
            console.log(userInfo);
        }
    }

    const [passSet, setPassSet] = useState(false);
    var passEye;
    if (passSet) {
        passEye = <Icon name="visibility" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setPassSet(false)} />;
    } else {
        passEye = <Icon name="visibility-off" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setPassSet(true)} />
    }

    const [rePassSet, setRePassSet] = useState(false);
    var rePassEye;
    if (rePassSet) {
        rePassEye = <Icon name="visibility" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setRePassSet(false)} />;
    } else {
        rePassEye = <Icon name="visibility-off" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setRePassSet(true)} />
    }

    const [verifyPass, setverifyPass] = useState(false);
    var passEnter;
    if (verifyPass) {
        passEnter =
            <>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Enter Password</Text>
                    <View>
                        <TextInput
                            value={password}
                            onChangeText={(value) => handeOnChangeText(value, 'password')}
                            style={styles.textfildPass}
                            placeholder="Password"
                            selectionColor={'black'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={!passSet}
                        />
                        {passEye}
                    </View>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Re-Enter Password</Text>
                    <View>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={(value) => handeOnChangeText(value, 'confirmPassword')}
                            style={styles.textfildPass}
                            placeholder="Re-Enter Password"
                            selectionColor={'black'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={!rePassSet}
                        />
                        {rePassEye}
                    </View>
                </View>
            </>
    } else {
        passEnter = <View></View>
    }

    var verifyButton;
    if (verifyPass) {
        verifyButton = <Pressable
            style={styles.submit}
            underlayColor='#fff'
            onPress={()=>submitForm()}
            android_ripple={{ color: '#fff' }}>
            <Text style={styles.submitText}>Sign Up</Text>
        </Pressable>
    } else {
        verifyButton = <Pressable
            style={styles.submit}
            underlayColor='#fff'
            onPress={()=>setverifyPass(true)}
            android_ripple={{ color: '#fff' }}>
            <Text style={styles.submitText}>Verify</Text>
        </Pressable>
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
                {error?<Text style={{color:'red',fontSize:18,textAlign:'center'}}>{error}</Text>:null}
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput
                        value={username}
                        onChangeText={(value) => handeOnChangeText(value, 'username')}
                        style={styles.textfild}
                        placeholder="Username"
                        selectionColor={'black'}
                    />
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={(value) => handeOnChangeText(value, 'email')}
                        style={styles.textfild}
                        placeholder="Email"
                        autoCapitalize="none"
                        selectionColor={'black'}
                    />
                    <Pressable
                        style={styles.getotp}
                        underlayColor='#fff'
                        android_ripple={{ color: '#fff' }}>
                        <Text style={styles.getotpText}>Get OTP</Text>
                    </Pressable>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Verification Code</Text>
                    <TextInput
                        style={styles.textfild}
                        placeholder="Verification Code"
                        selectionColor={'black'}
                        keyboardType='numeric'
                    />
                </View>
                {passEnter}
            </View>
            {verifyButton}
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
        marginTop: 30,
        marginBottom: 10,
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
    getotp: {
        marginRight: 10,
        marginLeft: 'auto',
        width: '15%',
        height: 20,
        marginTop: -30,
        backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    getotpText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});