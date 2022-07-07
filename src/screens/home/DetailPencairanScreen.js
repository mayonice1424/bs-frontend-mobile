import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';

const DetailPencairanScreen = ({navigation}) => {
  const logSaldo = () => {
    return (
      <View>
        <View style={saldoStyle.boxSmaller}>
          <Image
            style={saldoStyle.imageCoin}
            source={require('../../images/Image/RedCoin.png')}
          />
          <View style={saldoStyle.textContainer}>
            <View style={[saldoStyle.navigation, {backgroundColor: '#E94867'}]}>
              <Text style={[colorStyle.textColorWhite, textStyle.body1]}>
                Penjualan
              </Text>
            </View>
            <Text
              style={[textStyle.titleItem, colorStyle.blackForFontAndAnything]}>
              C-293-9202-2391-1203
            </Text>
            <Text style={[textStyle.body4, colorStyle.blackForFontAndAnything]}>
              27 Januari 2022
            </Text>
            <Text style={[{color: '#E94867'}, textStyle.body1]}>
              - 1500 Coin
            </Text>
          </View>
        </View>
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
        </View>
        <View>{logSaldo()}</View>
      </View>
    </View>
  );
};

export default DetailPencairanScreen;
