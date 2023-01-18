import React, { useRef, useState } from 'react'
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { StyleSheet, Text, TextArea, TextInput, TouchableOpacity, View, Pressable,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from "expo-image-picker/src/ImagePicker";

export default function BoostPost() {
    const richText = useRef();

    const [descHTML, setDescHTML] = useState("");

    const richTextHandle = (descriptionText) => {
        if (descriptionText) {
            setDescHTML(descriptionText);
        } else {
            setDescHTML("");
        }
    };
    const [imgUrl, setImgUrl] = useState({})
    const [selectImgUrl, setSelectImgUrl] = useState(null)

    let openImagePickerForAadharBackAsync = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setSelectImgUrl({ localUri: pickerResult.uri });
        setImgUrl(pickerResult);
        console.log(pickerResult)
    };

    return (
        <View style={styles.containerInfo}>
            <View style={{ width: "95%", height: "30%", borderWidth: 1, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                
                <TouchableOpacity onPress={openImagePickerForAadharBackAsync} style={{justifyContent:'center',alignItems:'center'}}><Icon name="add" size={25} /><Text>Add Image</Text></TouchableOpacity>
                {selectImgUrl !== null ? <View className="w-full h-52 ">
                    <Image
                        source={{ uri: selectImgUrl.localUri }}
                        style={{ resizeMode: "cover", width: 100, height: 100 }}
                    />
                </View> : <></>}
            </View>
            <TextInput
                style={styles.textfield}
                placeholder="Add Heading"
                placeholderTextColor={'black'}
                selectionColor={'black'}
            />
            <TextInput
                style={styles.textfield}
                placeholder="Add Tag"
                placeholderTextColor={'black'}
                selectionColor={'black'}
            />
            <TextInput
                style={styles.textfield}
                placeholder="Category"
                placeholderTextColor={'black'}
                selectionColor={'black'}
            />
            <TextInput
                style={styles.textfield}
                placeholder="Add Video Link"
                placeholderTextColor={'black'}
                selectionColor={'black'}
            />
            <View style={{ marginTop: 10, marginHorizontal: 10, flexDirection: 'column' }}>
                <RichEditor
                    ref={richText}
                    onChange={richTextHandle}
                    placeholder="Write Articles :)"
                    androidHardwareAccelerationDisabled={true}
                    style={styles.richTextEditorStyle}
                    initialHeight={150}
                />
                <RichToolbar
                    editor={richText}
                    selectedIconTint="#873c1e"
                    iconTint="#312921"
                    actions={[
                        actions.setBold,
                        actions.setItalic,
                        actions.insertBulletsList,
                        actions.insertOrderedList,
                        actions.insertLink,
                        actions.setStrikethrough,
                        actions.setUnderline,
                    ]}
                    style={styles.richTextToolbarStyle}
                />
            </View>
            <Pressable
                style={styles.post}
                underlayColor='#fff'
                android_ripple={{ color: '#fff' }}>
                <Text style={styles.postText}>POST</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    containerInfo: {
        marginTop: 40,
        color: 'black',
    },
    textfield: {
        height: 40,
        fontSize: 15,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingLeft: 10,
        marginVertical: 10,
    },
    textAreaContainer: {

        padding: 5
    },
    textArea: {
        height: 150,
        fontSize: 15,
        justifyContent: "flex-start",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingLeft: 10,
        marginVertical: 10,
    },
    post: {
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '8%',
        width: '50%',
        backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    postText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    richTextEditorStyle: {
        borderColor: "black",
        borderWidth: 0.5,
        elevation: 4,
        fontSize: 20,
    },

    richTextToolbarStyle: {
        backgroundColor: "white",
        borderColor: "black",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderWidth: 1,
    },
});