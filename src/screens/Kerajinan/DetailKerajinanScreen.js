import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import artikelCardStyle from '../../styles/artikelCardStyle';
import cardStyle from '../../styles/cardStyle';
import colorStyle from '../../styles/colorStyle';
import detailKerajinanStyle from '../../styles/detailKerajinanStyle';
import layoutStyle from '../../styles/layoutStyle';
import textStyle from '../../styles/textStyle';
import HorizontalLine from '../../components/HorizontalLine';
const DetailKerajinanScreen = ({route, navigation}) => {
  const getDetailKerajinan = async () => {
    try {
      let response = await fetch(
        `http://192.168.74.221:8000/bang-salam-api/kerajinan/` +
          route.params.data +
          `/`,
      );
      let res = await response.json();
      console.log(res);
      // console.log(res.bahan_kerajinan);
      setKerajinan(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    getDetailKerajinan();
    // console.log(kerajinan.foto_kerajinan);
    // console.log(route.params.data);
    // console.log(route.params.data[0]);
  }, []);

  const [kerajinan, setKerajinan] = useState({});

  return (
    <View style={detailKerajinanStyle.container}>
      <View style={detailKerajinanStyle.content}>
        <ScrollView>
          <View style={detailKerajinanStyle.imageContainer}>
            <Image
              source={{uri: kerajinan.foto_kerajinan}}
              style={detailKerajinanStyle.image}
            />
          </View>
          <View>
            <Text
              style={[colorStyle.blackForFontAndAnything, textStyle.header]}>
              {kerajinan.nama_kerajinan}
            </Text>
          </View>
          <View>
            <Text style={[colorStyle.primerGreenActive, textStyle.body2]}>
              Rp.{kerajinan.harga_kerajinan}
            </Text>
          </View>
          <View style={{marginVertical: '8%'}}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body2]}>
              Rincian Produk
            </Text>
          </View>
          <HorizontalLine />
          <View
            style={[
              detailKerajinanStyle.detailProductSpacing,
              {marginHorizontal: '5%', marginVertical: '3%'},
            ]}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              Stok
            </Text>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              {kerajinan.stock_kerajinan} Barang
            </Text>
          </View>
          <View
            style={[
              detailKerajinanStyle.detailProductSpacing,
              {marginHorizontal: '5%', marginVertical: '3%'},
            ]}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              Bahan
            </Text>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              {kerajinan.bahan_kerajinan}
            </Text>
          </View>
          <View
            style={[
              detailKerajinanStyle.detailProductSpacing,
              {marginHorizontal: '5%', marginVertical: '3%'},
            ]}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              Panjang
            </Text>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              {kerajinan.panjang_kerajinan} Cm
            </Text>
          </View>
          <View
            style={[
              detailKerajinanStyle.detailProductSpacing,
              {marginHorizontal: '5%', marginVertical: '3%'},
            ]}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              Lebar
            </Text>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              {kerajinan.lebar_kerajinan} Cm
            </Text>
          </View>
          <View
            style={[
              detailKerajinanStyle.detailProductSpacing,
              {marginHorizontal: '5%', marginVertical: '3%'},
            ]}>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              Tinggi
            </Text>
            <Text style={[colorStyle.blackForFontAndAnything, textStyle.body3]}>
              {kerajinan.tinggi_kerajinan} Cm
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailKerajinanScreen;
