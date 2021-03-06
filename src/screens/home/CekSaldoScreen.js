/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';
import {ip} from '../Ip';
import {
  MakeStripInString,
  ConvertTime,
  SliceDecimal,
  MoneySplitbyDot,
} from '../../utility/FunctionForUI';

const CekSaldo = ({route, navigation}) => {
  const userData = route.params;
  // console.log('transfered data :', userData.token);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTransaction = async () => {
    try {
      let response = await fetch(
        // 'https://api.jalantikus.com/api/v1/transaction/' + userData.id,

        `${ip}bang-salam-api/cash-flow-user/?user_id=${userData.data_user.id}&status=completed`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + userData.token,
          },
        },
      );
      const responseJson = await response.json();
      // console.log('responseJson :', responseJson);
      setData(responseJson);
    } catch (error) {
      console.log('error :', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransaction();
    // console.log('data :', data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CardPenjualan = props => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailPenjualan', {
              data_user: userData.data_user,
              id_penjualan: props.transaction_id,
              tanggal: props.transaction_date,
              nominal: props.transaction_nominal,
              token: userData.token,
            });
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
                P-{MakeStripInString(props.transaction_id)}
              </Text>
              <Text
                style={[textStyle.body4, colorStyle.blackForFontAndAnything]}>
                {ConvertTime(props.transaction_date)}
              </Text>
              <Text style={[colorStyle.darkGreen, textStyle.body1]}>
                + {MoneySplitbyDot(SliceDecimal(props.transaction_nominal))}{' '}
                Coin
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const CardPencairan = props => {
    return (
      <View>
        <TouchableOpacity>
          <View style={saldoStyle.boxSmaller}>
            <Image
              style={saldoStyle.imageCoin}
              source={require('../../images/Image/RedCoin.png')}
            />
            <View style={saldoStyle.textContainer}>
              <View
                style={[saldoStyle.navigation, {backgroundColor: '#E94867'}]}>
                <Text style={[colorStyle.textColorWhite, textStyle.body1]}>
                  Pencairan
                </Text>
              </View>
              <Text
                style={[
                  textStyle.titleItem,
                  colorStyle.blackForFontAndAnything,
                ]}>
                C-{MakeStripInString(props.transaction_id)}
              </Text>
              <Text
                style={[textStyle.body4, colorStyle.blackForFontAndAnything]}>
                {ConvertTime(props.transaction_date)}
              </Text>
              <Text style={[{color: '#E94867'}, textStyle.body1]}>
                - {MoneySplitbyDot(SliceDecimal(props.transaction_nominal))}{' '}
                Coin
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
            No Rekening : {MakeStripInString(userData.data_user.id)}
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
            Salam Coin :{' '}
            {MoneySplitbyDot(SliceDecimal(userData.data_user.saldo))}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PencairanDana', {
                data: userData.data_user,
              });
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
            ??? Dana dapat dicairkan dengan minimal coin 10.000
          </Text>
          <Text
            style={[textStyle.innerTeks, {fontWeight: '500', color: 'black'}]}>
            ??? Dana dapat dicairkan ketika memasuki bulan baru
          </Text>
          <View style={saldoStyle.line} />
        </View>
        {/* <LogSaldo /> */}
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            contentContainerStyle={{paddingBottom: '20%'}}
            data={data}
            renderItem={({item}) => {
              if (item.type === 'Pencairan') {
                return (
                  <CardPencairan
                    transaction_id={item.id}
                    transaction_date={item.tanggal}
                    transaction_nominal={item.total_nominal}
                  />
                );
              } else if (item.type === 'LogPenjualan') {
                return (
                  <CardPenjualan
                    transaction_id={item.id}
                    transaction_date={item.tanggal}
                    transaction_nominal={item.total_nominal}
                  />
                );
              }
            }}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default CekSaldo;
