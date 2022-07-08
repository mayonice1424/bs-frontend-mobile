import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfilScreen from "../Profil/ProfilScreen";
const Stack = createNativeStackNavigator();
const Profil= () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfilScreen"
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
      <Stack.Screen name="ProfilScreen" component={ProfilScreen}  options={{title: 'Profil'}} />
    </Stack.Navigator>
  );
};

export default Profil;

