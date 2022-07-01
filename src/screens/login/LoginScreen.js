import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';

import layoutStyle from '../../styles/layoutStyle';
import LoginHeaderComponent from '../../components/LoginHeaderComponent';

const LoginScreen = ({navigation}) => {
  const namaHalaman = 'Masuk';

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.header}>
        <LoginHeaderComponent halaman={namaHalaman} />
      </View>
      <View style={layoutStyle.content}>
        <Text>{namaHalaman}</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
