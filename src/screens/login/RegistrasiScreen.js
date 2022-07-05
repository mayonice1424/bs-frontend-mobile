import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import layoutStyle from '../../styles/layoutStyle';
import loginStyle from '../../styles/loginStyle';

const RegistrasiScreen = ({navigation}) => {
  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <ScrollView>
          <Formik
            initialValues={{
              nama: '',
              username: '',
              noTelp: '',
              kataSandi: '',
              validasiKataSandi: '',
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              // loginUser(values);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
              nama: Yup.string().required('nama dibutuhkan!').min(3, 'nama'),
              username: Yup.string()
                .required('username dibutuhkan minimal 5 karakter!')
                .min(5, 'username'),
              noTelp: Yup.string()
                .required('No Telp dibutuhkan!')
                .min(8, 'noTelp'),
              kataSandi: Yup.string()
                .required('Kata Sandi dibutuhkan minimal 8 karakter')
                .min(8, 'kataSandi'),
              validasiKataSandi: Yup.string()
                .required('Silahkan ketik ulang kata sandi!')
                .min(8, 'validasiKataSandi'),
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

                  <TextInput
                    style={loginStyle.input}
                    placeholder="No Telepon"
                    value={values.noTelp}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#c4c4c4'}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCompleteType="noTelp"
                    onChangeText={handleChange('noTelp')}
                    onBlur={handleBlur('noTelp')}
                  />
                  {errors.noTelp ? (
                    <Text style={loginStyle.valid}>{errors.noTelp}</Text>
                  ) : (
                    <Text style={loginStyle.valid}></Text>
                  )}

                  <TextInput
                    style={loginStyle.input}
                    placeholder="kata Sandi"
                    value={values.kataSandi}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#c4c4c4'}
                    autoCapitalize="none"
                    autoCompleteType="kataSandi"
                    onChangeText={handleChange('kataSandi')}
                    onBlur={handleBlur('kataSandi')}
                  />
                  {errors.kataSandi ? (
                    <Text style={loginStyle.valid}>{errors.kataSandi}</Text>
                  ) : (
                    <Text style={loginStyle.valid}></Text>
                  )}

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
