import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';

const CekSaldo = ({navigation}) => {
  const logSaldo = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailPenjualan');
          }}>
          <View style={saldoStyle.boxSmaller}>
            <Image
              style={saldoStyle.imageCoin}
              source={require('../../images/Image/GreenCoin.png')}
            />
            <View style={saldoStyle.textContainer}>
              <View style={saldoStyle.navigation}>
                <Text style={[colorStyle.textColorWhite, textStyle.body1]}>
                  Penjualan
                </Text>
              </View>
              <Text
                style={[
                  textStyle.titleItem,
                  colorStyle.blackForFontAndAnything,
                ]}>
                C-293-9202-2391-1203
              </Text>
              <Text
                style={[textStyle.body4, colorStyle.blackForFontAndAnything]}>
                27 Januari 2022
              </Text>
              <Text style={[colorStyle.darkGreen, textStyle.body1]}>
                + 500 Coin
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailPencairan');
          }}>
          <View style={saldoStyle.boxSmaller}>
            <Image
              style={saldoStyle.imageCoin}
              source={require('../../images/Image/RedCoin.png')}
            />
            <View style={saldoStyle.textContainer}>
              <View
                style={[saldoStyle.navigation, {backgroundColor: '#E94867'}]}>
                <Text style={[colorStyle.textColorWhite, textStyle.body1]}>
                  Penjualan
                </Text>
              </View>
              <Text
                style={[
                  textStyle.titleItem,
                  colorStyle.blackForFontAndAnything,
                ]}>
                C-293-9202-2391-1203
              </Text>
              <Text
                style={[textStyle.body4, colorStyle.blackForFontAndAnything]}>
                27 Januari 2022
              </Text>
              <Text style={[{color: '#E94867'}, textStyle.body1]}>
                - 1500 Coin
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <View style={saldoStyle.box}>
          <Text
            style={[
              colorStyle.greenRabun,
              textStyle.title2,
              {fontWeight: '500'},
            ]}>
            No Rekening : 1232-4342-3232
          </Text>
          <Image
            style={saldoStyle.imageCoin}
            source={require('../../images/Image/GreenCoin.png')}
          />
          <Text
            style={[
              colorStyle.greenRabun,
              textStyle.title2,
              {fontWeight: '500'},
            ]}>
            Salam Coin : 50.000
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PencairanDana');
            }}>
            <View style={saldoStyle.button}>
              <Text style={[textStyle.button, {color: 'white'}]}>Cairkan</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={saldoStyle.keterangan}>
          <Text
            style={[textStyle.innerTeks, {fontWeight: '500', color: 'black'}]}>
            Keterangan
          </Text>
          <Text
            style={[textStyle.innerTeks, {fontWeight: '500', color: 'black'}]}>
            • Dana dapat dicairkan dengan minimal coin 10.000
          </Text>
          <Text
            style={[textStyle.innerTeks, {fontWeight: '500', color: 'black'}]}>
            • Dana dapat dicairkan ketika memasuki bulan baru
          </Text>
        </View>
        <View>{logSaldo()}</View>
      </View>
    </View>
  );
};

export default CekSaldo;
