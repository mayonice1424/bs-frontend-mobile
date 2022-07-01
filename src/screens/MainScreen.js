import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './routes/ProfileRoutes';
import HomeRoutes from './routes/HomeRoutes';
import Kerajinan from './routes/KerajinanRoutes';
import Artikel from './routes/ArtikelRoutes';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather"

const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { 
            position: 'absolute',
            height : 60,
            borderTopEndRadius:20,
            borderTopStartRadius:20,
            shadowColor : "#000",
            shadowOpacity : 0.86,
            shadowOffset : {
              width :20,
              height:100,
            } 
          },
        }}
        >
        <Tab.Screen
          name="Home"
          component={HomeRoutes}
          options={{ headerShown: false, unmountOnBlur: true,
            tabBarLabel: (props) => {
              return(
                <Text style={{fontSize: 10, fontWeight: "bold" ,color : props.focused ? "#4AD482" : "#1D2E3D"}}>
                  Beranda
                </Text>
              )
            },
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="home-outline"
                  size={30}
                  color={tabInfo.focused ? "#4AD482" : "#1D2E3D"}
                />
        )}}}
        />
        <Tab.Screen
        name="Artikel"
        component={Artikel}
        options={{ headerShown: false, unmountOnBlur: true,
          tabBarLabel: (props) => {
            return(
              <Text style={{fontSize: 10, fontWeight: "bold" ,color : props.focused ? "#4AD482" : "#1D2E3D"}}>
                Artikel
              </Text>
            )
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="document-text-outline"
                size={30}
                color={tabInfo.focused ? "#4AD482" : "#1D2E3D"}
              />
      )}}}
      />
        <Tab.Screen
          name="Kerajinan"
          component={Kerajinan}
          options={{ headerShown: false, unmountOnBlur: true,
            tabBarLabel: (props) => {
              return(
                <Text style={{fontSize: 10, fontWeight: "bold" ,color : props.focused ? "#4AD482" : "#1D2E3D"}}>
                  Kerajinan
                </Text>
              )
            },
            tabBarIcon: (tabInfo) => {
              return (
                <Feather
                  name="shopping-bag"
                  size={30}
                  color={tabInfo.focused ? "#4AD482" : "#1D2E3D"}
                />
        )}}}
        />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{ headerShown: false, unmountOnBlur: true,
            tabBarLabel: (props) => {
              return(
                <Text style={{fontSize: 10, fontWeight: "bold" ,color : props.focused ? "#4AD482" : "#1D2E3D"}}>
                  Profil
                </Text>
              )
            },
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-person-circle-outline"
                  size={32}
                  color={tabInfo.focused ? "#4AD482" : "#1D2E3D"}
                />
        )}}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
