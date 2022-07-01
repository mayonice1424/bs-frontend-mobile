import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import layoutStyle from '../../styles/layoutStyle';
import HeaderComponent from '../../components/HeaderComponent';

const BerandaScreen = ({navigation}) => {
  const namaHalaman = 'Beranda';

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.header}>
        <HeaderComponent halaman={namaHalaman} />
      </View>
      <View style={layoutStyle.content}>
        <Text>{namaHalaman}</Text>
      </View>
    </View>
  );
};

export default BerandaScreen;
