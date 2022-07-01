import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../login/LoginScreen';
import ResetPasswordScreen from '../login/ResetPasswordScreen';
import RegistrasiScreen from '../login/RegistrasiScreen';

import layoutStyle from '../../styles/layoutStyle';
import colorStyle from '../../styles/colorStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import chevron from '../../images/chevron.png';

const Stack = createNativeStackNavigator();

function LoginRoute({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Registrasi"
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
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registrasi" component={RegistrasiScreen} />
      <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default LoginRoute;
