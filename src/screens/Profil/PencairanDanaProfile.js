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
import HorizontalLine from '../../components/HorizontalLine';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {ip} from '../Ip';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PencairanDanaProfileScreen = ({route, navigation}) => {
  const userData = route.params.data;
  // console.log('transfered data :', userData.token);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTransaction = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const tokens = JSON.parse(token);
      let response = await fetch(
        `${ip}bang-salam-api/cash-flow-user/?user_id=${userData.id}&status=completed`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokens.token,
          },
        },
      );
      const responseJson = await response.json();
      console.log('responseJson :', responseJson);
      setData(responseJson);
    } catch (error) {
      console.log('error :', error);
    } finally {
      setLoading(false);
    }
  };

  const cairDana = async credentials => {
    const token = await AsyncStorage.getItem('token');
    const tokens = JSON.parse(token);
    let body = {
      id_pengguna: userData.id,
      total_nominal: credentials.nominal,
      status_pencairan: '0',
    };
    console.log('body : ', body);
    return await fetch(ip + `bang-salam-api/pencairan/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + tokens.token,
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(response => {
        console.log('response :', response);
        Alert.alert(
          'Pencairan Dana',
          'Pencairan dana berhasil sebesar Rp. ' +
            response.total_nominal.slice(0, -3) +
            ' silahkan ke bank salam untuk mengambil uang Anda',
        );
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const makeStripInString = transaction_id => {
    let number = transaction_id;
    let str = number.toString();
    let result = str.replace(/\d{4}(?=.)/g, '$&-');
    return result;
  };

  useEffect(() => {
    getTransaction();
    // console.log('data :', route.params.data);
  }, []);

  return (
    <View style={layoutStyle.container}>
      <ScrollView>
        <View style={layoutStyle.content}>
          <View style={saldoStyle.box}>
            <Text
              style={[
                colorStyle.greenRabun,
                textStyle.title2,
                {fontWeight: '500'},
              ]}>
              No Rekening : {makeStripInString(userData.id)}
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
              Salam Coin : {userData.saldo.slice(0, -3)}
            </Text>
          </View>
          <View style={saldoStyle.keterangan}>
            <View style={{marginBottom: '5%'}}>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: '#26C165'},
                ]}>
                Aturan Pencairan
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black'},
                ]}>
                • Dana dapat dicairkan dengan minimal coin 10.000
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black'},
                ]}>
                • Pencairan hanya dapat dilakukan pada tanggal 1 hingga 7
                disetiap awal bulan
              </Text>
            </View>
            <View style={{marginBottom: '5%'}}>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: '#26C165'},
                ]}>
                Aturan Pencairan Dana
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black'},
                ]}>
                • Nasabah mengisi form pencairan dana
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black'},
                ]}>
                • Nasabah mengetikkan pengajuan pencairan dana
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  {fontWeight: '500', color: 'black'},
                ]}>
                • Nasabah datang ke Bank Sampah untuk mengambil dan pencairan
              </Text>
            </View>
          </View>
          <Formik
            initialValues={{nominal: ''}}
            onSubmit={(values, actions) => {
              console.log(values);
              cairDana(values);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
              nominal: Yup.string()
                .required('nominal pencairan dibutuhkan!')
                .test(
                  'kelipatan 1000',
                  'nominal harus kelipatan 1000',
                  function (value) {
                    return value % 1000 === 0;
                  },
                )
                .min(5, 'nominal pencairan minimal 10.000'),
            })}>
            {formikProps => {
              const {handleChange, handleBlur, handleSubmit, values, errors} =
                formikProps;
              return (
                <View>
                  <TextInput
                    style={loginStyle.input}
                    placeholder="Isi Nominal Pencairan (contoh: 12000)"
                    value={values.nominal}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#c4c4c4'}
                    keyboardType="nominal-address"
                    autoCapitalize="none"
                    autoCompleteType="nominal"
                    onChangeText={handleChange('nominal')}
                    onBlur={handleBlur('nominal')}
                  />
                  {errors.nominal ? (
                    <Text style={loginStyle.valid}>{errors.nominal}</Text>
                  ) : (
                    <Text style={loginStyle.valid}></Text>
                  )}
                  <HorizontalLine />

                  <View style={loginStyle.buttonContainer}>
                    <TouchableOpacity
                      style={loginStyle.button}
                      mode="contained"
                      onPress={() => {
                        handleSubmit();
                      }}>
                      <Text
                        style={[textStyle.button, colorStyle.primerBackground]}>
                        Cairkan Dana
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default PencairanDanaProfileScreen;
