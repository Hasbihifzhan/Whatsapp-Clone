// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenWa from './src/screen/ScreenWa';
import SettingsScreen from './src/screen/SettingsScreen';
import SplashScreen from './src/screen/SplashScreen';
import RoomChat from './src/screen/RoomChat';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={ScreenWa} />
      <Stack.Screen name="Setting" component={SettingsScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Room" component={RoomChat} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
