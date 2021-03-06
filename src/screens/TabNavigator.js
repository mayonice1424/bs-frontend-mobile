import React, {useState} from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeRoutes from './routes/HomeRoutes';
import ArtikelRoutes from './routes/ArtikelRoutes';
import KerajinanRoutes from './routes/KerajinanRoutes';
import ProfilRoutes from './routes/ProfilRoutes';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Kerajinan from './routes/KerajinanRoutes';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 5,
          height: 58,
          paddingBottom: 5,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          shadowColor: '#000',
          shadowOpacity: 0.86,
          shadowOffset: {
            width: 40,
            height: 100,
          },
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: props => {
            return (
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: props.focused ? '#4AD482' : '#1D2E3D',
                }}>
                Beranda
              </Text>
            );
          },
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="home-outline"
                size={30}
                color={tabInfo.focused ? '#4AD482' : '#1D2E3D'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Artikel"
        component={ArtikelRoutes}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: props => {
            return (
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: props.focused ? '#4AD482' : '#1D2E3D',
                }}>
                Pengumuman
              </Text>
            );
          },
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="document-text-outline"
                size={30}
                color={tabInfo.focused ? '#4AD482' : '#1D2E3D'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Kerajinan"
        component={Kerajinan}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: props => {
            return (
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: props.focused ? '#4AD482' : '#1D2E3D',
                }}>
                Kerajinan
              </Text>
            );
          },
          tabBarIcon: tabInfo => {
            return (
              <Feather
                name="shopping-bag"
                size={30}
                color={tabInfo.focused ? '#4AD482' : '#1D2E3D'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilRoutes}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: props => {
            return (
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: props.focused ? '#4AD482' : '#1D2E3D',
                }}>
                Profil
              </Text>
            );
          },
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="md-person-circle-outline"
                size={32}
                color={tabInfo.focused ? '#4AD482' : '#1D2E3D'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
