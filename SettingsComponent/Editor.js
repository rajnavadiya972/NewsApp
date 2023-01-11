import React, { useRef, useState } from 'react'
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { StyleSheet, View } from 'react-native';

const Editor = () => {
    const richText = useRef();

    const [descHTML, setDescHTML] = useState("");

    const richTextHandle = (descriptionText) => {
        if (descriptionText) {
            setDescHTML(descriptionText);
        } else {
            setDescHTML("");
        }
    };

    return (
        <View style={{ marginTop: 100, marginHorizontal: 20 }}>
            <View>
                <RichEditor
                    ref={richText}
                    onChange={richTextHandle}
                    placeholder="Write your cool content here :)"
                    androidHardwareAccelerationDisabled={true}
                    style={styles.richTextEditorStyle}
                    initialHeight={150}
                />
            </View>
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
    )
}

export default Editor;


const styles = StyleSheet.create({
    richTextEditorStyle: {
        borderColor: "#c6c3b3",
        borderWidth: 1,
        elevation: 4,
        fontSize: 20,
    },

    richTextToolbarStyle: {
        backgroundColor: "white",
        borderColor: "#c6c3b3",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderWidth: 1,
    },
});