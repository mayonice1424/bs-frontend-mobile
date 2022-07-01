import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';

import layoutStyle from '../../styles/layoutStyle';
import HeaderComponent from '../../components/HeaderComponent';
import berandaStyle from '../../styles/berandaStyle';

const BerandaScreen = ({navigation}) => {
  const namaHalaman = 'Beranda';

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.header}>
        <HeaderComponent halaman={namaHalaman} />
      </View>
      <View style={layoutStyle.content}>
        <View style={berandaStyle.box}>
          <View>
            <Image></Image>
          </View>
          <View>
            <Text>Hai, Sarah Amelia</Text>
            <Text>Apakah sudah menjual sampah hari ini?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BerandaScreen;
