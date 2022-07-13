import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';
import loginStyle from '../../styles/loginStyle';
import {ip} from '../Ip';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');
import AsyncStorage from '@react-native-async-storage/async-storage';
import BerandaScreen from './BerandaScreen';

const JualSampahScreen = ({navigation}) => {
  const [data, setDataSampah] = useState(0);
  const postSampahData = async () => {
    const token = await AsyncStorage.getItem('token');
    const tokens = JSON.parse(token);
    const body = {id_pengguna: tokens.id};
    console.log(body);
    let data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + tokens.token,
      },
      body: JSON.stringify(body),
    };
    try {
      let response = await fetch(`${ip}bang-salam-api/penjualan/`, data);
      let res = await response.json();
      console.log(res);
      Alert.alert(
        'Berhasil',
        'Pengajuan penjualan sampah berhasil dilakukan, silahkan bawa sampah ke bank sampah untuk dilakukan perhitungan',
      );
      navigation.navigate('BerandaScreen');
    } catch (error) {
      console.log(error);
    }
  };

  const getDataSampah = async () => {
    const token = await AsyncStorage.getItem('token');
    const tokens = JSON.parse(token);
    let data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + tokens.token,
      },
    };
    try {
      let response = await fetch(
        `${ip}bang-salam-api/penjualan-onprocess/?user_id=` + tokens.id,
        data,
      );
      let res = await response.json();
      // console.log(res);
      setDataSampah(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataSampah();
  }, []);

  const Jualan = () => {
    // console.log(data[0]);
    if (data.length > 0) {
      return (
        <View style={[saldoStyle.boxSmaller, {marginBottom: '5%'}]}>
          <Image
            style={saldoStyle.imageCoin}
            source={require('../../images/Image/YellowCoin.png')}
          />
          <View style={saldoStyle.textContainer}>
            <View style={[saldoStyle.navigation, {backgroundColor: '#C2B919'}]}>
              <Text style={[colorStyle.textColorWhite, textStyle.body1]}>
                Penjualan
              </Text>
            </View>
            <Text
              style={[textStyle.titleItem, colorStyle.blackForFontAndAnything]}>
              {'P-' + data[0].id}
            </Text>
            <Text style={[textStyle.body4, colorStyle.blackForFontAndAnything]}>
              {moment(data[0].tanggal).format('DD MMMM YYYY')}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={loginStyle.buttonContainer}>
          <TouchableOpacity
            style={loginStyle.button}
            mode="contained"
            onPress={() => {
              postSampahData();
            }}>
            <Text style={[textStyle.button, colorStyle.primerBackground]}>
              Jual Sampah
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View style={layoutStyle.container}>
      <ScrollView>
        <View style={layoutStyle.content}>
          <View style={saldoStyle.keterangan}>
            <View style={{marginBottom: '5%'}}>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: '#26C165'},
                ]}>
                Penjualan Sampah
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black', textAlign: 'justify'},
                ]}>
                • Akun pengguna harus terverifikasi terlebih dahulu
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black', textAlign: 'justify'},
                ]}>
                • Sampah dapat dijual dengan minimal berat total keseluruhan
                sebesar 5 Kg
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black', textAlign: 'justify'},
                ]}>
                • Untuk menjual sampah silahkan klik tombol jual sampah dibawah
                ini
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black', textAlign: 'justify'},
                ]}>
                • Pengajuan penjualan sampah akan tertera pada halaman ini
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black', textAlign: 'justify'},
                ]}>
                • Sampah harus dipisahkan berdasarkan jenisnya terlebih dahulu
                sebelum dibawa ke bank sampah
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black', textAlign: 'justify'},
                ]}>
                • Ketika terdapat pengajuan permintaan segera datang ke bank
                sampah untuk proses penjualan dengan membawa sampah yang ingin
                dijual
              </Text>
            </View>
          </View>
          <View style={{height: '100%'}}>
            <Jualan />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default JualSampahScreen;
