import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HorizontalLine from '../../components/HorizontalLine';

import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';

const DetailPenjualanScreen = ({route, navigation}) => {
  const data = route.params;
  console.log('transfered data :', data);
  const logSaldo = () => {
    return (
      <View>
        <View style={saldoStyle.boxLarge}>
          <View style={{flexDirection: 'row', marginBottom: '10%'}}>
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
          <HorizontalLine />
          <View>
            <View style={{marginBottom: '5%'}}>
              <Text
                style={[
                  textStyle.subtitle2,
                  colorStyle.darkGreen,
                  {textAlign: 'auto'},
                ]}>
                • Botol
              </Text>
              <Text
                style={[
                  textStyle.caption,
                  colorStyle.blackForFontAndAnything,
                  {textAlign: 'auto'},
                ]}>
                ID Sampah : 11-11-111-212121
              </Text>
              <Text
                style={[
                  textStyle.caption,
                  colorStyle.blackForFontAndAnything,
                  {textAlign: 'auto', marginBottom: '2%'},
                ]}>
                Kuantitas : 10 Kg
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={[
                    textStyle.innerTeks,
                    colorStyle.darkGreen,
                    {textAlign: 'auto'},
                  ]}>
                  Total Coin :
                </Text>
                <Text
                  style={[
                    textStyle.innerTeks,
                    colorStyle.darkGreen,
                    {textAlign: 'auto'},
                  ]}>
                  13.000 Coin
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <View style={[saldoStyle.box, {marginBottom: '5%'}]}>
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

export default DetailPenjualanScreen;
