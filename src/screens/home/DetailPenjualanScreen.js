import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import HorizontalLine from '../../components/HorizontalLine';
import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';
import {ip} from '../Ip';
import {
  MakeStripInString,
  ConvertTime,
  SliceDecimal,
  ChangeTypeOfQuantity,
  MoneySplitbyDot,
} from '../../utility/FunctionForUI';

const DetailPenjualanScreen = ({route, navigation}) => {
  const data = route.params;
  // console.log('transfered data :', data);
  // console.log('data :', data.data_user);
  const [isLoading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getDetail = async () => {
    try {
      let response = await fetch(
        // 'https://api.jalantikus.com/api/v1/transaction/' + userData.id,

        `${ip}bang-salam-api/detail-penjualan-user/${data.id_penjualan}`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + data.token,
          },
        },
      );
      const responseJson = await response.json();
      // console.log('responseJson :', responseJson);
      setDetail(responseJson);
    } catch (error) {
      console.log('error :', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
    console.log('data :', detail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LogSaldo = props => {
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
                P-{MakeStripInString(data.id_penjualan)}
              </Text>
              <Text
                style={[textStyle.body4, colorStyle.blackForFontAndAnything]}>
                {ConvertTime(data.tanggal)}
              </Text>
              <Text style={[colorStyle.darkGreen, textStyle.body1]}>
                + {MoneySplitbyDot(SliceDecimal(data.nominal))} Coin
              </Text>
            </View>
          </View>
          <HorizontalLine />
          <View>
            <View style={{marginBottom: '5%'}}>
              <FlatList
                data={props.data_sampah.sampah}
                renderItem={({item}) => (
                  <View>
                    <Text
                      style={[
                        textStyle.subtitle2,
                        colorStyle.darkGreen,
                        {textAlign: 'auto'},
                      ]}>
                      • {item.id_sampah.nama_sampah}
                    </Text>
                    <Text
                      style={[
                        textStyle.caption,
                        colorStyle.blackForFontAndAnything,
                        {textAlign: 'auto'},
                      ]}>
                      ID Sampah : {item.id_sampah.id}
                    </Text>
                    <Text
                      style={[
                        textStyle.caption,
                        colorStyle.blackForFontAndAnything,
                        {textAlign: 'auto', marginBottom: '2%'},
                      ]}>
                      Kuantitas :{' '}
                      {ChangeTypeOfQuantity(
                        item.kuantitas_sampah,
                        item.id_sampah.jenis_kuantitas,
                      )}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
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
                        {MoneySplitbyDot(SliceDecimal(detail.total_nominal))}{' '}
                        Coin
                      </Text>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
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
            No Rekening : {MakeStripInString(data.data_user.id)}
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
            Salam Coin : {MoneySplitbyDot(SliceDecimal(data.data_user.saldo))}
          </Text>
        </View>

        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <LogSaldo data_sampah={detail} />
          )}
        </View>
      </View>
    </View>
  );
};

export default DetailPenjualanScreen;
