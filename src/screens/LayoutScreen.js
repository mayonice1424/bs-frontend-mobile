import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import layoutStyle from '../styles/layoutStyle';

const LayoutScreen = () => {
  const namaHalaman = 'Layout';

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.header}>
        <HeaderBackComponent halaman={namaHalaman} />
      </View>
      <View style={layoutStyle.content}>
        <Text>{namaHalaman}</Text>
      </View>
    </View>
  );
};

export default LayoutScreen;
