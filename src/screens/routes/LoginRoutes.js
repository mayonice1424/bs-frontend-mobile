import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../login/LoginScreen';
import ResetPasswordScreen from '../login/ResetPasswordScreen';
import ResetPassword2Screen from '../login/ResetPassword2Screen';
import RegistrasiScreen from '../login/RegistrasiScreen';
import Registrasi2Screen from '../login/Registrasi2Screen';
import UserOnBoarding from '../login/UserOnBoarding';
import UserDashboard from '../login/UserDashboard';

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
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <Stack.Screen name="Registrasi" component={RegistrasiScreen} />
      <Stack.Screen
        name="Registrasi2"
        component={Registrasi2Screen}
        options={{title: 'Registrasi'}}
      />
      <Stack.Screen
        name="Reset Password"
        component={ResetPasswordScreen}
        options={{title: 'Lupa Kata Sandi'}}
      />
      <Stack.Screen
        name="Reset Password 2"
        component={ResetPassword2Screen}
        options={{title: 'Lupa Kata Sandi'}}
      />
    </Stack.Navigator>
  );
}

export default LoginRoute;
