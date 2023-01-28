import logo from '../images/logo1.png';
import GoogleSignin from './GoogleSignUp';
import React, { useState } from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup';
import client from './../api/Client';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';
import axios from 'axios';


export default function Login({ navigation }) {
    // const isValidObjectField = (obj) => {
    //     return Object.values(obj).every(value => value.trim())
    // }


    const validationSchema = Yup.object({
        username: Yup.string().trim().min(3, 'Invalid name').required('name is requierd!'),
        email: Yup.string().email('Invalid email!').required('Email is required!'),
        password: Yup.string().min(8, 'password is too short!').required('password is required!'),
        // confirmPassword: Yup.string().equals([Yup.ref('password'), null], 'password does not match!')
    })

    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
            stateUpdater('');
        }, 2500);
    }

    // const isValidEmail = (value) => {
    //     const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //     return regx.test(value);
    // }

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('')
    const { username, email, password } = userInfo;

    // const handeOnChangeText = (value, fieldName) => {
    //     setUserInfo({ ...userInfo, [fieldName]: value })
    // }

    // const isValidForm = () => {
    //     if (!isValidObjectField(userInfo)) return updateError('Required all fields', setError);

    //     if (!username.trim() || username.length < 3) return updateError('Invalid name!', setError);

    //     if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    //     if (!password.trim() || password.length < 8) return updateError('password is less then 8 character!', setError);

    //     return true;
    // }

    // const submitForm = () => {
    //     console.log(userInfo);
    //     if (isValidForm()) {
    //         console.log(userInfo);
    //         return true;
    //     }
    //     return false
    // }

    const signUp = async (values, FormikActions) => {
        console.log(values);
        
        const res = await client.post('/signIn', {
            ...values
        });
        console.log("Hello");
        console.log(res.data);
        if (res.data.success === false) {
            updateError(res.data.message, setError)
            return;
        }
        navigation.navigate("BottomHome");
        FormikActions.resetForm();
        FormikActions.setSubmitting(false);
    }

    const [passSet, setPassSet] = useState(false);
    var passEye;
    if (passSet) {
        passEye = <Icon name="visibility" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setPassSet(false)} />;
    } else {
        passEye = <Icon name="visibility-off" style={{ marginTop: -30, marginRight: 10, marginLeft: 'auto' }} size={25} onPress={() => setPassSet(true)} />
    }

    return (
        <ScrollView style={styles.maincontainer}>
            <Formik
                initialValues={userInfo}
                validationSchema={validationSchema}
                onSubmit={signUp}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {

                    const { username, email, password } = values;
                    return <>
                        <View style={styles.container}>
                            <Text style={{ marginTop: 40, fontSize: 20, fontWeight: "600" }}>World News</Text>
                            <Image source={logo}
                                style={{ width: 250, height: 200 }}
                            />
                        </View>
                        <View>
                            {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text> : null}
                            <View style={styles.containerInfo}>
                                {/* <Text style={styles.text}>Username</Text> */}
                                <View style={styles.errorView}>
                                    <Text style={styles.text}>Username</Text>
                                    {
                                        errors.username && touched.username ?
                                            (<Text style={styles.errorText}>{errors.username}</Text>) : null
                                    }
                                </View>
                                <TextInput
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    style={styles.textfild}
                                    placeholder="Username"
                                    selectionColor={'black'}
                                    value={username}
                                />
                            </View>
                            <View style={styles.containerInfo}>
                                {/* <Text style={styles.text}>Email</Text> */}
                                <View style={styles.errorView}>
                                    <Text style={styles.text}>Email</Text>
                                    {
                                        errors.email && touched.email ?
                                            (<Text style={styles.errorText}>{errors.email}</Text>) : null
                                    }
                                </View>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    style={styles.textfild}
                                    placeholder="Email"
                                    autoCapitalize="none"
                                    selectionColor={'black'}
                                    value={email}
                                />
                            </View>
                            <View style={styles.containerInfo}>
                                {/* <Text style={styles.text}>Password</Text> */}
                                <View style={styles.errorView}>
                                    <Text style={styles.text}>Password</Text>
                                    {
                                        errors.password && touched.password ?
                                            (<Text style={styles.errorText}>{errors.password}</Text>) : null
                                    }
                                </View>
                                <View>
                                    <TextInput
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        style={styles.textfildPass}
                                        placeholder="Password"
                                        selectionColor={'black'}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={!passSet}
                                        value={password}
                                    />
                                    {passEye}
                                </View>
                                <Text style={{ marginLeft: 'auto', marginRight: 10, marginTop: 10, color: '#68a0cf' }} onPress={() => navigation.navigate('Verify')}>Forgot Password?</Text>
                            </View>
                        </View>
                        <Pressable
                            // onPress={() => submitForm() ? navigation.navigate("BottomHome") : null}
                            onPress={(errors) ? handleSubmit : null}
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
                            <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>Don't have account? <Text style={{ fontWeight: '600', color: '#68a0cf' }} onPress={() => navigation.navigate('Register')}>Register</Text></Text>
                        </View>
                    </>
                }}
            </Formik>
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
    errorText: { color: 'red' },
    errorView: { flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 },
});