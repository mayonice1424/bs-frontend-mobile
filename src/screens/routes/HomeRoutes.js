import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BerandaScreen from '../home/BerandaScreen';
import LayoutScreen from '../LayoutScreen';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BerandaScreen" component={BerandaScreen} />
    </Stack.Navigator>
  );
}

export default Route;
