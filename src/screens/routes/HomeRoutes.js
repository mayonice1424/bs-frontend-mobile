import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BerandaScreen from '../home/BerandaScreen';
import LayoutScreen from '../LayoutScreen';

const Stack = createNativeStackNavigator();

function HomeRoute() {
  return (
    <Stack.Navigator
      initialRouteName="BerandaScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BerandaScreen" component={BerandaScreen} />
    </Stack.Navigator>
  );
}

export default HomeRoute;
