import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BerandaScreen from '../home/BerandaScreen';
import LayoutScreen from '../LayoutScreen';
import CekSaldoScreen from '../home/CekSaldoScreen';
import PencairanDanaScreen from '../home/PencairanDanaScreen';
import DetailPenjualanScreen from '../home/DetailPenjualanScreen';
import DetailPencairanScreen from '../home/DetailPencairanScreen';
import Artikel from './ArtikelRoutes';

const Stack = createNativeStackNavigator();

function HomeRoute() {
  return (
    <Stack.Navigator
      initialRouteName="BerandaScreen"
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
        name="BerandaScreen"
        component={BerandaScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CekSaldo"
        component={CekSaldoScreen}
        options={{title: 'Cek Saldo'}}
      />
      <Stack.Screen
        name="PencairanDana"
        component={PencairanDanaScreen}
        options={{title: 'Pencairan Dana'}}
      />
      <Stack.Screen
        name="DetailPenjualan"
        component={DetailPenjualanScreen}
        options={{title: 'Detail Penjualan'}}
      />
      <Stack.Screen
        name="DetailPencairan"
        component={DetailPencairanScreen}
        options={{title: 'Detail Pencairan'}}
      />
      <Stack.Screen name="ArtikelRoutes" component={Artikel} />
    </Stack.Navigator>
  );
}

export default HomeRoute;
