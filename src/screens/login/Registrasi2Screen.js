import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
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
    console.log(all_data);
    // navigation.navigate('Registrasi2', credentials);
    return await fetch(
      `http://192.168.74.221:8000/bang-salam-api/register-user/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(all_data),
      },
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        // setCheckToken(response);
      })
      .catch(error => console.log(error));
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
              console.log(values);
              registrasi(values);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
              nik: Yup.string()
                .required('nik dibutuhkan!')
                .min(16, 'nik')
                .max(16, 'nik'),
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
                  <TextInput
                    style={loginStyle.input}
                    placeholder="Alamat"
                    value={values.alamat}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#c4c4c4'}
                    keyboardType="numeric"
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

                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      backgroundColor: '#04b040',
                      borderRadius: 15,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      alignItems: 'center',
                      shadowColor: '#E67E22',
                      shadowOpacity: 0.8,
                      elevation: 8,
                    }}
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
                    <Text>Upload Foto KTP</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      backgroundColor: '#04b040',
                      borderRadius: 15,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      alignItems: 'center',
                      shadowColor: '#E67E22',
                      shadowOpacity: 0.8,
                      elevation: 8,
                    }}
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
                    <Text>Upload Foto Profil</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    mode="contained"
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={loginStyle.ButtonSubmit}>Submit</Text>
                  </TouchableOpacity>
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
