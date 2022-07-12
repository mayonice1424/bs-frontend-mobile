import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import artikelCardStyle from '../../styles/artikelCardStyle';
import cardStyle from '../../styles/cardStyle';
import colorStyle from '../../styles/colorStyle';
import detailArtikelStyle from '../../styles/detailArtikelStyle';

import layoutStyle from '../../styles/layoutStyle';
import textStyle from '../../styles/textStyle';

const DetailArtikelScreen = ({route, navigation}) => {
  const [artikel, setArtikel] = useState([]);

  const getDetailArtikel = async () => {
    try {
      let response = await fetch(
        `http://192.168.74.221:8000/bang-salam-api/data-informasi/` +
          route.params.data +
          `/`,
      );
      let res = await response.json();
      console.log(res);
      setArtikel(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    getDetailArtikel();
  }, []);
  return (
    <View style={detailArtikelStyle.container}>
      <View style={detailArtikelStyle.content}>
        <ScrollView>
          <View>
            <Text
              style={[colorStyle.blackForFontAndAnything, textStyle.header]}>
              {artikel.judul_informasi}
            </Text>
          </View>
          <View style={detailArtikelStyle.imageContainer}>
            <Image
              style={detailArtikelStyle.image}
              source={{uri: artikel.thumbnail_informasi}}
            />
          </View>
          <View style={[detailArtikelStyle.date]}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.date]}>
              {artikel.tanggal_dibuat}
            </Text>
          </View>
          <View>
            <Text
              style={[
                textStyle.caption1,
                colorStyle.blackForFontAndAnything,
                detailArtikelStyle.text,
              ]}>
              {artikel.isi_informasi}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailArtikelScreen;
