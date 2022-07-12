import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import artikelCardStyle from '../../styles/artikelCardStyle';
import cardStyle from '../../styles/cardStyle';
import colorStyle from '../../styles/colorStyle';
import detailArtikelStyle from '../../styles/detailArtikelStyle';

import layoutStyle from '../../styles/layoutStyle';
import textStyle from '../../styles/textStyle';

const DetailArtikelScreen = ({route, navigation}) => {
  useEffect(() => {
    console.log(route.params.data);
  });
  return (
    <View style={detailArtikelStyle.container}>
      <View style={detailArtikelStyle.content}>
        <ScrollView>
          <View>
            <Text
              style={[colorStyle.blackForFontAndAnything, textStyle.header]}>
              {route.params.data.judul_informasi}
            </Text>
          </View>
          <View style={detailArtikelStyle.imageContainer}>
            <Image
              style={detailArtikelStyle.image}
              source={{uri: route.params.data.thumbnail_informasi}}
            />
          </View>
          <View style={[detailArtikelStyle.date]}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.date]}>
              {route.params.data.tanggal_dibuat}
            </Text>
          </View>
          <View>
            <Text
              style={[
                textStyle.caption1,
                colorStyle.blackForFontAndAnything,
                detailArtikelStyle.text,
              ]}>
              {route.params.data.isi_informasi}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailArtikelScreen;
