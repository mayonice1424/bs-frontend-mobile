import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return <MainScreen />;
}
