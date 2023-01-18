import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker/src/ImagePicker";
const AddDoc = () => {
    const [imgUrl, setImgUrl] = useState({})
    const [selectImgUrl, setSelectImgUrl] = useState(null)

    let openImagePickerForAadharBackAsync = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setSelectImgUrl({ localUri: pickerResult.uri });
        setImgUrl(pickerResult);
        console.log(pickerResult)
    };

    return (
        <View>
            <TouchableOpacity onPress={openImagePickerForAadharBackAsync} ><Text style={{ marginTop: 100 }} >hello</Text></TouchableOpacity>
            {selectImgUrl !== null ? <View className="w-full h-52 ">
                <Image
                    source={{ uri: selectImgUrl.localUri }}
                    style={{ resizeMode: "cover", width: "50%", height: "50%" }}
                />
            </View> : <></>}
        </View>
    )
}

export default AddDoc