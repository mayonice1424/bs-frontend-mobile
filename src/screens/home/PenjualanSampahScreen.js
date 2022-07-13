import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import penjualanSampahStyle from '../../styles/penjualanSampahStyle';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import cardStyle from '../../styles/cardStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ip} from '../Ip';
import {MoneySplitbyDot} from '../../utility/FunctionForUI';

const Stack = createNativeStackNavigator();
const PenjualanSampahScreen = ({route, navigation}) => {
  const [kategori, setKategori] = useState([]);
  const [active, setActive] = useState(1);
  const user = route.params.data;

  const getDataSampah = async () => {
    try {
      let response = await fetch(
        ip + `bang-salam-api/lihat-data-sampah/`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const responseJson = await response.json();
      // console.log('responseJson :', responseJson);
      setKategori(responseJson);
    } catch (error) {
      // console.log('error :', error);
    }
  };

  useEffect(() => {
    getDataSampah();
  }, []);

  return (
    <View style={[penjualanSampahStyle.container]}>
      <View style={[penjualanSampahStyle.content]}>
        <ScrollView>
          <View
            style={{
              marginTop: '10%',
              marginVertical: '10%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={[
                penjualanSampahStyle.box,
                ,
                colorStyle.backgroundSoftPurple,
              ]}
              onPress={() => {
                navigation.navigate('KalkulatorScreen');
              }}>
              <Ionicons
                name="calculator"
                size={28}
                style={[colorStyle.blackForFontAndAnything, {marginRight: 5}]}
              />
              <Text
                style={[colorStyle.blackForFontAndAnything, textStyle.body1]}>
                Kalkulator
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                penjualanSampahStyle.box,
                colorStyle.backgroundSoftYellow,
              ]}
              onPress={() => {
                if (user.status_verifikasi === '1') {
                  navigation.navigate('JualSampahScreen');
                } else {
                  Alert.alert(
                    'Verifikasi Akun Dibutuhkan',
                    'Akun Anda belum terverifikasi, pastikan Anda telah mengisi data KTP dan NIK yang sesuai, dan menunggu konfirmasi dari admin',
                  );
                }
              }}>
              <Ionicons
                name="receipt"
                size={28}
                style={[colorStyle.blackForFontAndAnything, {marginRight: 5}]}
              />
              <Text
                style={[colorStyle.blackForFontAndAnything, textStyle.body1]}>
                Jual Sampah
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[colorStyle.darkGreen, textStyle.body2]}>
            Katalog Harga Sampah
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', marginBottom: '1%'}}>
              {kategori.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setActive(item.id);
                    }}
                    key={index}
                    style={[
                      penjualanSampahStyle.button,
                      index === active - 1
                        ? colorStyle.backgroundPrimerGreenActive
                        : {backgroundColor: '#D5DBD1'},
                    ]}>
                    <Text
                      style={[
                        textStyle.boxSlideFont,
                        index === active - 1
                          ? colorStyle.whiteForCard
                          : colorStyle.blackForFontAndAnything,
                      ]}>
                      {item.nama_kategori_sampah}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={{marginTop: 10}}>
            {kategori.map((item, index) => {
              if (item.nama_kategori_sampah === 'Semua' && item.id === active) {
                return (
                  <View key={index}>
                    {kategori.map((item, index) => {
                      return (
                        <View key={index}>
                          {item.list_sampah.map((item, index) => {
                            // console.log(item);
                            return (
                              <View key={index} style={[cardStyle.container]}>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  <View>
                                    <Image
                                      source={{uri: item.foto_sampah}}
                                      style={cardStyle.image}
                                    />
                                  </View>
                                  <View>
                                    <Text
                                      style={[
                                        textStyle.titleItem,
                                        colorStyle.blackForFontAndAnything,
                                      ]}>
                                      {item.nama_sampah}
                                    </Text>
                                    <Text
                                      style={[
                                        textStyle.body3,
                                        colorStyle.blackForFontAndAnything,
                                      ]}>
                                      {item.kuantitas}{' '}
                                      {item.jenis_kuantitas === '0'
                                        ? 'Buah/Pcs'
                                        : 'Kg'}
                                    </Text>
                                    <Text
                                      style={[
                                        textStyle.body2,
                                        colorStyle.darkGreen,
                                      ]}>
                                      {MoneySplitbyDot(item.harga)} Coin
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            );
                          })}
                        </View>
                      );
                    })}
                  </View>
                );
              } else if (item.id === active) {
                return (
                  <View key={index}>
                    {item.list_sampah.map((item, index) => {
                      return (
                        <View key={index} style={[cardStyle.container]}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignContent: 'center',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View>
                              <Image
                                source={{uri: item.foto_sampah}}
                                style={cardStyle.image}
                              />
                            </View>
                            <View>
                              <Text
                                style={[
                                  textStyle.titleItem,
                                  colorStyle.blackForFontAndAnything,
                                ]}>
                                {item.nama_sampah}
                              </Text>
                              <Text
                                style={[
                                  textStyle.body3,
                                  colorStyle.blackForFontAndAnything,
                                ]}>
                                {item.kuantitas}{' '}
                                {item.jenis_kuantitas === '0'
                                  ? 'Buah/Pcs'
                                  : 'Kg'}
                              </Text>
                              <Text
                                style={[textStyle.body2, colorStyle.darkGreen]}>
                                {MoneySplitbyDot(item.harga)} Coin
                              </Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default PenjualanSampahScreen;
