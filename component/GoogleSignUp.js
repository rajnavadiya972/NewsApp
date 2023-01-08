import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Pressable,
    TouchableOpacity,
  } from "react-native";
  import * as WebBrowser from "expo-web-browser";
  import React, {useEffect, useState} from "react";
  import * as Google from "expo-auth-session/providers/google";
  
  WebBrowser.maybeCompleteAuthSession();
  
  const GoogleSignUp = () => {
    const [accessToken, setacessToken] = useState(null);
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
      clientId:
        "254623897287-rb1aju28bkhu69cbdm68rl4lj90eim9e.apps.googleusercontent.com",
      iosClientId:
        "254623897287-27fm7igibfrp6b1s2q5uakhqhhdrklfc.apps.googleusercontent.com",
      androidClientId:
        "254623897287-5fqahq9jh6rekk39h421hau2r75gbonj.apps.googleusercontent.com",
    });
  
    useEffect(() => {
      if (response?.type === "success") {
        // console.log(response);
        // setacessToken(response.params.id_token);
        setacessToken(response.params.id_token);
  
        // accessToken && fetchUserInfo();
      }
    }, [response]);
  
    useEffect(() => {
      if (accessToken) {
        fetchUserInfo(accessToken);
      }
    }, [accessToken]);
  
    async function fetchUserInfo(token) {
      // https://www.googleapis.com/userinfo/v2/me
      let response = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
      );
      const useInfo = await response.json();
      console.log(useInfo);
      setUser(useInfo);
    }
  
    const showUserInfo = () => {
      if (!user) return null;
      return (
        <View>
          <Text>Welcome</Text>
          <Text>{user.name}</Text>
        </View>
      );
    };
  
    return (
      <>
        <Pressable
          style={styles.google}
          onPress={() => {
            promptAsync();
          }}
          android_ripple={{color: "#6E6969"}}
        >
          <Image
            style={styles.gimage}
            source={require("../images/n2.gif")}
          />
          <Text style={styles.googleContinue}>Continue With Google</Text>
        </Pressable>
        {showUserInfo()}
      </>
    );
  };
  
  const styles = StyleSheet.create({
    google: {
      flexDirection: "row",
      borderWidth: 2,
      borderColor: "#C2C7C8",
      borderRadius: 4,
      width: "85%",
      marginRight:'auto',
      marginLeft:'auto',
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:10
    },
    googleContinue: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "grey",
    },
    gimage: {
      height: 30,
      width: 40,
    },
  });
  
  export default GoogleSignUp;