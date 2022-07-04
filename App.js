import * as React from 'react';
import UserOnBoarding3 from './src/screens/useronboarding/UserOnBoarding3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLogin from './src/screens/routes/HomeLogin';
import UserOnBoarding2 from './src/screens/useronboarding/UserOnBoarding2';
import UserOnBoarding1 from './src/screens/useronboarding/UserOnBoarding1';
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserOnBoarding1"
        screenOptions = {{headerShown: false}}>
        <Stack.Screen name="UserOnBoarding1" component={UserOnBoarding1} />
        <Stack.Screen name="UserOnBoarding2" component={UserOnBoarding2} />
        <Stack.Screen name="UserOnBoarding3" component={UserOnBoarding3} />
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
