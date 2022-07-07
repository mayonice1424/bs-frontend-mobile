import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import layoutStyle from '../../styles/layoutStyle';
import loginStyle from '../../styles/loginStyle';
import HorizontalLine from '../../components/HorizontalLine';
import textStyle from '../../styles/textStyle';
import colorStyle from '../../styles/colorStyle';

const RegistrasiScreen = ({navigation}) => {
  const registrasi = async credentials => {
    navigation.navigate('Registrasi2', credentials);
  };

  return (
    <View style={layoutStyle.container}>
      <KeyboardAvoidingView>
        <View style={layoutStyle.content}>
          <ScrollView>
            <Formik
              initialValues={{
                nama: '',
                username: '',
                no_telepon: '',
                password: '',
                validasiKataSandi: '',
              }}
              onSubmit={(values, actions) => {
                // console.log(values);
                if (values.password === values.validasiKataSandi) {
                  registrasi(values);
                  actions.setSubmitting(false);
                } else {
                  alert('Kata sandi tidak sama');
                }
              }}
              validationSchema={Yup.object({
                nama: Yup.string()
                  .required('nama dibutuhkan!')
                  .min(3, 'nama minimal 3 karakter'),
                username: Yup.string()
                  .required('username dibutuhkan!')
                  .min(5, 'username minimal 5 karakter!'),
                no_telepon: Yup.string()
                  .required('no telepon dibutuhkan!')
                  .matches(/^[0-9]+$/, 'no telepon harus berupa angka!')
                  .min(8, 'no telepon minimal 8 digit!'),
                password: Yup.string()
                  .required('Kata Sandi dibutuhkan!')
                  .min(8, 'password minimal 8 karakter!'),
                validasiKataSandi: Yup.string()
                  .when('password', {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                      [Yup.ref('password')],
                      'Password tidak sama',
                    ),
                  })
                  .required('Validasi Kata Sandi dibutuhkan!'),
              })}>
              {formikProps => {
                const {handleChange, handleBlur, handleSubmit, values, errors} =
                  formikProps;
                return (
                  <View>
                    <TextInput
                      style={loginStyle.input}
                      placeholder="Nama"
                      value={values.nama}
                      underlineColorAndroid="transparent"
                      placeholderTextColor={'#c4c4c4'}
                      keyboardType="nama-address"
                      autoCapitalize="none"
                      autoCompleteType="nama"
                      onChangeText={handleChange('nama')}
                      onBlur={handleBlur('nama')}
                    />
                    {errors.nama ? (
                      <Text style={loginStyle.valid}>{errors.nama}</Text>
                    ) : (
                      <Text style={loginStyle.valid}></Text>
                    )}
                    <HorizontalLine />

                    <TextInput
                      style={loginStyle.input}
                      placeholder="Username"
                      value={values.username}
                      underlineColorAndroid="transparent"
                      placeholderTextColor={'#c4c4c4'}
                      keyboardType="username-address"
                      autoCapitalize="none"
                      autoCompleteType="username"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                    />
                    {errors.username ? (
                      <Text style={loginStyle.valid}>{errors.username}</Text>
                    ) : (
                      <Text style={loginStyle.valid}></Text>
                    )}
                    <HorizontalLine />

                    <TextInput
                      style={loginStyle.input}
                      placeholder="No Telepon"
                      value={values.no_telepon}
                      underlineColorAndroid="transparent"
                      placeholderTextColor={'#c4c4c4'}
                      keyboardType="numeric"
                      autoCapitalize="none"
                      autoCompleteType="tel"
                      onChangeText={handleChange('no_telepon')}
                      onBlur={handleBlur('no_telepon')}
                    />
                    {errors.no_telepon ? (
                      <Text style={loginStyle.valid}>{errors.no_telepon}</Text>
                    ) : (
                      <Text style={loginStyle.valid}></Text>
                    )}
                    <HorizontalLine />

                    <TextInput
                      style={loginStyle.input}
                      placeholder="kata Sandi"
                      value={values.password}
                      underlineColorAndroid="transparent"
                      placeholderTextColor={'#c4c4c4'}
                      autoCapitalize="none"
                      secureTextEntry
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                    />
                    {errors.password ? (
                      <Text style={loginStyle.valid}>{errors.password}</Text>
                    ) : (
                      <Text style={loginStyle.valid}></Text>
                    )}
                    <HorizontalLine />

                    <TextInput
                      style={loginStyle.input}
                      placeholder="Ketik Ulang Kata Sandi"
                      value={values.validasiKataSandi}
                      underlineColorAndroid="transparent"
                      placeholderTextColor={'#c4c4c4'}
                      autoCapitalize="none"
                      secureTextEntry
                      onChangeText={handleChange('validasiKataSandi')}
                      onBlur={handleBlur('validasiKataSandi')}
                    />
                    {errors.validasiKataSandi ? (
                      <Text style={loginStyle.valid}>
                        {errors.validasiKataSandi}
                      </Text>
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
                          style={[
                            textStyle.button,
                            colorStyle.primerBackground,
                          ]}>
                          Selanjutnya
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            </Formik>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegistrasiScreen;
