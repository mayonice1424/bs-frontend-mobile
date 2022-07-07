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

const KalkulatorScreen = () => {
  const jualan = () => {
    return (
      <View style={loginStyle.buttonContainer}>
        <TouchableOpacity
          style={loginStyle.button}
          mode="contained"
          onPress={() => {}}>
          <Text style={[textStyle.button, colorStyle.primerBackground]}>
            Jual Sampah
          </Text>
        </TouchableOpacity>
      </View>
    );
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
          <View>{jualan()}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default KalkulatorScreen;
