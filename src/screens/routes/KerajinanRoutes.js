import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import KerajinanScreen from "../Kerajinan/KerajinanScreen";
const Stack = createNativeStackNavigator();
const Kerajinan = () => {
  return (
    <Stack.Navigator
      initialRouteName="KerajinanScreen"
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
      <Stack.Screen name="KerajinanScreen" component={KerajinanScreen}  options={{title: 'Kerajinan'}} />
    </Stack.Navigator>
  );
};

export default Kerajinan;

