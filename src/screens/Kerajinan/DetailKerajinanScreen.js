import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import artikelCardStyle from '../../styles/artikelCardStyle';
import cardStyle from '../../styles/cardStyle';
import colorStyle from '../../styles/colorStyle';
import detailKerajinanStyle from '../../styles/detailKerajinanStyle';
import layoutStyle from '../../styles/layoutStyle';
import textStyle from '../../styles/textStyle';
import HorizontalLine from '../../components/HorizontalLine';
const DetailKerajinanScreen = ({route, navigation}) => {
  useEffect(() => {
    console.log(route.params.data);
  });
  return (
    <View style={detailKerajinanStyle.container}>
      <View style={detailKerajinanStyle.content}>
        <ScrollView>
          <View style={detailKerajinanStyle.imageContainer}>
            <Image
              source={route.params.data.thumbnail}
              style={detailKerajinanStyle.image}
            />
          </View>
          <View>
            <Text
              style={[colorStyle.blackForFontAndAnything, textStyle.header]}>
              {route.params.data.namaBarang}
            </Text>
          </View>
          <View>
            <Text style={[colorStyle.primerGreenActive, textStyle.body2]}>
              Rp.{route.params.data.harga}
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
              {route.params.data.stok} Cm
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
              {route.params.data.bahan}
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
              {route.params.data.panjang} Cm
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
              {route.params.data.lebar} Cm
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
              {route.params.data.tinggi} Cm
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailKerajinanScreen;
