import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import LoginRoutes from './routes/LoginRoutes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();

const MainScreen = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginRoutes"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginRoutes" component={LoginRoutes} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
