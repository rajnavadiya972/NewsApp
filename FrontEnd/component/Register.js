import logo from '../images/logo1.png';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';


export default function Verify() {
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
    if(verifyPass){
        passEnter =
            <>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Enter Password</Text>
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
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Re-Enter Password</Text>
                    <View>
                        <TextInput
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
    }else{
        passEnter = <View></View>
    }

    var verifyButton;
    if (verifyPass) {
        verifyButton = <Pressable
            style={styles.submit}
            underlayColor='#fff'
            android_ripple={{ color: '#fff' }}>
            <Text style={styles.submitText}>Sign Up</Text>
        </Pressable>
    } else {
        verifyButton = <Pressable
            style={styles.submit}
            underlayColor='#fff'
            onPress={() => setverifyPass(true)}
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
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput
                        style={styles.textfild}
                        placeholder="Username"
                        selectionColor={'black'}
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
        fontWeight:'500'
    },
    submit: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '40%',
        marginTop: 30,
        marginBottom:10,
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