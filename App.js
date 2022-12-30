import Login from './component/Login.js';
import Verify from './component/Verify';
import Register from './component/Register';
<<<<<<< HEAD
=======
import OnSwipe from './component/OnSwipe';
import { useColorScheme } from 'react-native';
>>>>>>> 3fa8463fa4689f12951e9a5fb13183d81aa86356
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
<<<<<<< HEAD
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
=======
        <Stack.Navigator initialRouteName="onSwipe" screenOptions={{headerShown:false}} carsS>
>>>>>>> 3fa8463fa4689f12951e9a5fb13183d81aa86356
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="onSwipe" component={OnSwipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


