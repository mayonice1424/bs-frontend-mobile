import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeRoutes from './routes/HomeRoutes';

const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Sampah') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'Kerajinan') {
              iconName = focused ? 'ios-journal' : 'ios-journal-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#518fed',
          tabBarInactiveTintColor: 'gray',
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeRoutes}
          options={{headerShown: false, unmountOnBlur: true}}
        />
        <Tab.Screen
          name="Sampah"
          component={HomeRoutes}
          options={{
            title: 'Daftar Pemesanan',
            headerStyle: {
              backgroundColor: '#518fed',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignItems: 'center',
            },
            headerTitleAlign: 'center',
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Kerajinan"
          component={HomeRoutes}
          options={{
            title: 'Daftar Pembatalan',
            headerStyle: {
              backgroundColor: '#f04313',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignItems: 'center',
            },
            headerTitleAlign: 'center',
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
