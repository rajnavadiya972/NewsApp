import React, { useCallback, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,
    StatusBar
} from "react-native";
import DocumentPicker from "react-native-document-picker"

const DocAdd = () => {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = async () => {
        try {
            const response =await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                //There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
              });
            console.log(response)
            //   setFileResponse(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle={'dark-content'} />
            {fileResponse.map((file, index) => (
                <Text
                    key={index.toString()}
                    style={styles.uri}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                    {file?.uri}
                </Text>
            ))}
            <Button title="Select 📑" onPress={handleDocumentSelection} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor:
            "radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",
    },
    file: {
        color: "black",
        marginHorizontal: 145,
    },
    button: {
        marginHorizontal: 60,
    },
})

export default DocAdd