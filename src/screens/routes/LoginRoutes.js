import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../login/LoginScreen';
import ResetPasswordScreen from '../login/ResetPasswordScreen';
import RegistrasiScreen from '../login/RegistrasiScreen';
import Registrasi2Screen from '../login/Registrasi2Screen';
import UserOnBoarding from '../login/UserOnBoarding';
import UserDashboard from '../login/UserDashboard';

import layoutStyle from '../../styles/layoutStyle';
import colorStyle from '../../styles/colorStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import chevron from '../../images/chevron.png';

const Stack = createNativeStackNavigator();

function LoginRoute({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="UserOnBoarding"
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
      <Stack.Screen
        name="User On Boarding"
        component={UserOnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registrasi" component={RegistrasiScreen} />
      <Stack.Screen
        name="Registrasi2"
        component={Registrasi2Screen}
        options={{title: 'Registrasi'}}
      />
      <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default LoginRoute;
