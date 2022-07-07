import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';
import loginStyle from '../../styles/loginStyle';
import HorizontalLine from '../../components/HorizontalLine';

import {Formik} from 'formik';
import * as Yup from 'yup';

const PencairanDanaScreen = () => {
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
              loginUser(values);
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

export default PencairanDanaScreen;
