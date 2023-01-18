import Login from './component/Login.js';
import Verify from './component/Verify';
import Register from './component/Register';
import OnSwipe from './component/OnSwipe';
import BottomHome from './component/BottomHome';
import SettingIn from './SettingsTab/SettingsIn.js';
import Setting from './BottomTab/Setting.js';
import Editor from './SettingsComponent/Editor.js';
import SearchBar from './SettingsComponent/Search'
import  SettingProfile from './SettingsComponent/MyProfile';
import BoostPost from './SettingsComponent/BoostPost.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="onSwipe" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="onSwipe" component={OnSwipe} />
          <Stack.Screen name="BottomHome" component={BottomHome} />
          <Stack.Screen name="SettingIn" component={SettingIn} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="SettingProfile" component={SettingProfile} />
          <Stack.Screen name="Editor" component={Editor} />
          <Stack.Screen name="Search" component={SearchBar} />
          <Stack.Screen name="BoostPost" component={BoostPost} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
} 