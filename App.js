import Login from './component/Login.js';
import Verify from './component/Verify';
import Register from './component/Register';
import OnSwipe from './component/OnSwipe';
import { useColorScheme } from 'react-native';
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
        <Stack.Navigator initialRouteName="onSwipe" screenOptions={{headerShown:false}} carsS>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="onSwipe" component={OnSwipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


