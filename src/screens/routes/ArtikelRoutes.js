import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArtikelScreen from "../Artikel/ArtikelScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailArtikelScreen from "../Artikel/DetailArtikelScreen";
const Stack = createNativeStackNavigator();
const Artikel = () => {
  return (
    <Stack.Navigator
      initialRouteName="ArtikelScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FCFFFC',
        },
        headerTintColor: '#26C165',
        // headerBackImageSource: (
        //   <Image source={chevron} style={{height: 16, width: 16}} />
        // ),
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="ArtikelScreen" component={ArtikelScreen}  options={{title: 'Pengumuman'}} />
      <Stack.Screen name="DetailArtikelScreen" component={DetailArtikelScreen}  options={{title: 'Detail Pengumuman'}} />
    </Stack.Navigator>
  );
};

export default Artikel;

