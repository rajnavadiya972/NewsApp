import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import ProfilePhoto from '../images/logo1.png';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from "expo-image-picker/src/ImagePicker";


const MyProfile = () => {
    const [imgUrl, setImgUrl] = useState({})
    const [selectImgUrl, setSelectImgUrl] = useState(null)

    let openImagePickerForAadharBackAsync = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setSelectImgUrl({ localUri: pickerResult.uri });
        setImgUrl(pickerResult);
        console.log(pickerResult)
    };

    const [catagory, setCatagory] = useState(1);
    var mediaIcon, visitorIcon;
    if (catagory === 1) {
        mediaIcon = <Icon name="checkmark-done-circle-outline" style={styles.iconStyle} size={25} onPress={() => setCatagory(2)} />;
        visitorIcon = <Icon name="checkmark-done-circle-outline" style={styles.iconStyle} size={25} onPress={() => setCatagory(3)} />;
    }
    else if (catagory === 2) {
        mediaIcon = <Icon name="checkmark-done-circle" style={styles.iconStyle} size={25} onPress={() => setCatagory(1)} />;
        visitorIcon = <Icon name="checkmark-done-circle-outline" style={styles.iconStyle} size={25} onPress={() => setCatagory(3)} />;
    }
    else {
        mediaIcon = <Icon name="checkmark-done-circle-outline" style={styles.iconStyle} size={25} onPress={() => setCatagory(2)} />;
        visitorIcon = <Icon name="checkmark-done-circle" style={styles.iconStyle} size={25} onPress={() => setCatagory(1)} />;
    }

    var uploadMedia;
    if (catagory === 2) {
        uploadMedia = <Text style={{ color: '#68a0cf', fontSize: 15 }}>Upload Media</Text>
    }

    return (
        <SafeAreaView>
            <View style={{ alignItems: 'center', shadowColor: 'black', shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 } }}>
                <Text style={styles.header}>My Profile</Text>
            </View>
            <View style={styles.ProfContainer}>
                <Image source={ProfilePhoto} style={{ width: 130, height: 130, borderRadius: 100, marginTop: 10 }} />
                <TouchableOpacity onPress={openImagePickerForAadharBackAsync} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#68a0cf', marginVertical: 10 }}>Change Profile Photo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerInfo}>
                <TextInput
                    style={styles.textfield}
                    placeholder="Username"
                    selectionColor={'black'}
                />
                <TextInput
                    style={styles.textfield}
                    placeholder="First name"
                    selectionColor={'black'}
                />
                <TextInput
                    style={styles.textfield}
                    placeholder="Last name"
                    selectionColor={'black'}
                />
                <TextInput
                    style={styles.textfield}
                    placeholder="Email Id"
                    selectionColor={'black'}
                />
                <TextInput
                    style={styles.textfield}
                    placeholder="Change Password"
                    selectionColor={'black'}
                />
            </View>
            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "500" }}>I am a</Text>
            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10, alignItems: 'center' }}>
                {mediaIcon}
                <Text style={styles.text}>Media Reporter</Text>
                {visitorIcon}
                <Text style={styles.text}>Visitor</Text>
            </View>
            <View style={styles.uploadFile}>
                {uploadMedia}
            </View>
        </SafeAreaView>
    );
}
export default MyProfile;
const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: '500',
    },
    ProfContainer: {
        alignItems: "center",
    },
    textfield: {
        height: 40,
        fontSize: 15,
        backgroundColor: 'white',
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        marginHorizontal: 10,
        marginTop: 10,
        paddingLeft: 10,
        marginVertical: 10,
    },
    iconStyle: {
        color: '#68a0cf',
        marginHorizontal: 10,
    },
    text: {
        marginRight: 10,
    },
    uploadFile: {
        marginLeft: 20,
        marginVertical: 15,
    }
});