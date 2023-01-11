import Login from './component/Login.js';
import Verify from './component/Verify';
import Register from './component/Register';
import OnSwipe from './component/OnSwipe';
import BottomHome from './component/BottomHome';
import SettingIn from './SettingsTab/SettingsIn.js';
import Setting from './BottomTab/Setting.js';
import BoostPost from './SettingsComponent/BoostPost';
import AddDoc from './SettingsComponent/AddDoc';
import DocAdd from './SettingsComponent/DocAdd.js';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoogleLogin from './component/GoogleSignUp.js';
import { Text } from 'react-native';

const MyTheme = {
  dark: false,
  colors: {
    background: 'rgb(255,255,255)',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="AddImg" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="onSwipe" component={OnSwipe} />
          <Stack.Screen name="BottomHome" component={BottomHome} />
          <Stack.Screen name="SettingIn" component={SettingIn} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="BoostPost" component={BoostPost} />
          <Stack.Screen name="AddImg" component={AddImg} />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <GoogleLogin /> */}
      {/* <BoostPost /> */}
      {/* <BoostPost /> */}
      {/* <Text>hggs</Text> */}
      <DocAdd/ >
    </>
  );
}


