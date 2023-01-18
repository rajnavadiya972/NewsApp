import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import {Home,Bookmark,Notification,Setting} from '../BottomTab';
import Home from '../BottomTab/Home';
import Bookmark from '../BottomTab/Bookmark';
import Notification from '../BottomTab/Notification';
import Setting from '../BottomTab/Setting';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();

function BottomHome() {
  return (
    <Tab.Navigator
      shifting={true}
      barStyle={{backgroundColor:'#f5f5f5',height:70}}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarIcon: ({ color, sized, focused }) => {
          let iconname;
          if (route.name == 'Home') {
            iconname = focused ? 'home' : 'home-outline';
          }
          else if (route.name == 'Bookmark') {
            iconname = focused ? 'bookmark' : 'bookmark-outline';
          }
          else if (route.name == 'Notification') {
            iconname = focused ? 'md-notifications-sharp' : 'md-notifications-outline';
          }
          else if (route.name == 'Setting') {
            iconname = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconname} size={25} color='#68a0cf' />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
export default BottomHome;