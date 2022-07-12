import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');
import {Formik} from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

import layoutStyle from '../../styles/layoutStyle';
import loginStyle from '../../styles/loginStyle';
import HorizontalLine from '../../components/HorizontalLine';
import textStyle from '../../styles/textStyle';
import colorStyle from '../../styles/colorStyle';
import {ip} from '../Ip';

const RegistrasiScreen = ({route, navigation}) => {
  let data = route.params;

  const [Profil, setProfil] = useState({
    uri: '',
    type: '',
    name: '',
  });
  const [KTP, setKTP] = useState({
    uri: '',
    type: '',
    name: '',
  });
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const showPicker = () => {
    setIsPickerShow(true);
  };

  const registrasi = async credentials => {
    let all_data = {
      ...data,
      ...credentials,
      tanggal_lahir: moment(date).format('YYYY-MM-DD'),
      foto_ktp: KTP,
      foto_profil: Profil,
    };
    // console.log(all_data);
    // const upload_data = new FormData();
    // upload_data.append(all_data);
    const final_data = new FormData();
    final_data.append('alamat', all_data.alamat);
    final_data.append('username', all_data.username);
    final_data.append('password', all_data.password);
    final_data.append('no_telepon', all_data.no_telepon);
    final_data.append('nama', all_data.nama);
    final_data.append('role', all_data.role);
    final_data.append('foto_profil', all_data.foto_profil);
    final_data.append('tanggal_lahir', all_data.tanggal_lahir);
    final_data.append('nik', all_data.nik);
    final_data.append('foto_ktp', all_data.foto_ktp);
    // console.log('halloo', final_data);

    return await fetch(ip + `bang-salam-api/register-user/`, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        Accept: 'application/json',
        'Content-Type':
          'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
      },
      // body: upload_data,
      body: final_data,
    })
      .then(response => {
        // console.log(response);
        // console.log('status: ', response.status);
        if (response.status === 201) {
          Alert.alert(
            'Registrasi Berhasil',
            'Silahkan melakukan login terlebih dahulu',
          );
          navigation.navigate('UserDashboard');
        } else {
          Alert.alert(
            'Registrasi Gagal',
            'Terdapat data yang tidak dapat digunakan, silahkan cek data kembali',
          );
        }
      })

      .catch(error => {
        Alert.alert(
          'Registrasi Gagal',
          'Terdapat data yang tidak dapat digunakan, silahkan cek data kembali',
        );
        // console.log(error);
      });
  };

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <ScrollView>
          <Formik
            initialValues={{
              nik: '',
              tanggal_lahir: moment(Date.now()).format('YYYY-MM-DD'),
              alamat: '',
              role: 'pengguna',
            }}
            onSubmit={(values, actions) => {
              // console.log(values);
              registrasi(values);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
              nik: Yup.string()
                .required('nik dibutuhkan!')
                .matches(/^[0-9]+$/, 'NIK harus berupa angka!')
                .min(16, 'nik harus 16 digit!')
                .max(16, 'nik harus 16 digit!'),
              alamat: Yup.string()
                .required('alamat dibutuhkan!')
                .min(8, 'alamat'),
            })}>
            {formikProps => {
              const {handleChange, handleBlur, handleSubmit, values, errors} =
                formikProps;
              return (
                <View>
                  <TextInput
                    style={loginStyle.input}
                    placeholder="NIK"
                    value={values.nik}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#c4c4c4'}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCompleteType="nik"
                    onChangeText={handleChange('nik')}
                    onBlur={handleBlur('nik')}
                  />
                  {errors.nik ? (
                    <Text style={loginStyle.valid}>{errors.nik}</Text>
                  ) : (
                    <Text style={loginStyle.valid}></Text>
                  )}
                  <HorizontalLine />

                  <View style={loginStyle.package}>
                    <View style={loginStyle.formDateTime}>
                      {!isPickerShow && (
                        <View style={loginStyle.btnContainer}></View>
                      )}
                      {/* The date picker */}
                      {isPickerShow && (
                        <DateTimePicker
                          value={date}
                          mode={'date'}
                          display={
                            Platform.OS === 'ios' ? 'spinner' : 'default'
                          }
                          is24Hour={true}
                          onChange={(event, selectedDate) => {
                            setDate(selectedDate);
                            setIsPickerShow(false);
                          }}
                          style={loginStyle.datePicker}
                        />
                      )}
                      <View style={loginStyle.pickedDateContainer}>
                        <Text
                          onPress={showPicker}
                          style={loginStyle.pickedDate}>
                          Tanggal Lahir : {moment(date).format('D MMMM YYYY')}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <HorizontalLine />

                  <TextInput
                    style={loginStyle.input}
                    placeholder="Alamat"
                    value={values.alamat}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#c4c4c4'}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCompleteType="alamat"
                    onChangeText={handleChange('alamat')}
                    onBlur={handleBlur('alamat')}
                  />
                  {errors.alamat ? (
                    <Text style={loginStyle.valid}>{errors.alamat}</Text>
                  ) : (
                    <Text style={loginStyle.valid}></Text>
                  )}
                  <HorizontalLine />

                  <View style={loginStyle.formField}>
                    <Text style={colorStyle.blackForFontAndAnything}>
                      Foto KTP
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={loginStyle.uploadButton}
                      onPress={() => {
                        launchImageLibrary({noData: true}, response => {
                          if (response) {
                            setKTP({
                              ...KTP,
                              uri: response.assets[0].uri,
                              type: response.assets[0].type,
                              name: response.assets[0].fileName,
                            });
                            // console.log(response.assets[0].uri);
                          }
                        });
                      }}>
                      <Text
                        style={[textStyle.body4, colorStyle.primerBackground]}>
                        Upload Foto KTP
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={loginStyle.formField}>
                    <Text style={colorStyle.blackForFontAndAnything}>
                      Foto Profil
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={loginStyle.uploadButton}
                      onPress={() => {
                        launchImageLibrary({noData: true}, response => {
                          if (response) {
                            setProfil({
                              ...KTP,
                              uri: response.assets[0].uri,
                              type: response.assets[0].type,
                              name: response.assets[0].fileName,
                            });
                            // console.log(response.assets[0].uri);
                          }
                        });
                      }}>
                      <Text
                        style={[textStyle.body4, colorStyle.primerBackground]}>
                        Upload Foto Profil
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={loginStyle.buttonContainer}>
                    <TouchableOpacity
                      style={loginStyle.button}
                      mode="contained"
                      onPress={() => {
                        handleSubmit();
                      }}>
                      <Text
                        style={[textStyle.button, colorStyle.primerBackground]}>
                        Daftar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegistrasiScreen;
