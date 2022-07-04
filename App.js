
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLogin from './src/screens/routes/HomeLogin';
import UserOnBoarding1 from './src/screens/useronboarding/UserOnBoarding1';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserOnBoarding1"
        screenOptions = {{headerShown: false}}>
        <Stack.Screen name="UserOnBoarding1" component={UserOnBoarding1} />
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}