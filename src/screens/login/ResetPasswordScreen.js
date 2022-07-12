import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import layoutStyle from '../../styles/layoutStyle';
import loginStyle from '../../styles/loginStyle';
import HorizontalLine from '../../components/HorizontalLine';
import textStyle from '../../styles/textStyle';
import colorStyle from '../../styles/colorStyle';
import { ip } from '../Ip';

const ResetPasswordScreen = ({navigation}) => {
  const resetPassword = async credentials => {
    return await fetch(
      ip + `bang-salam-api/reset-password/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      },
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.message === 'Data tidak sesuai') {
          Alert.alert('Tidak Sesuai', 'Username atau NIK tidak sesuai');
        } else {
          navigation.navigate('Reset Password 2', {user_id: response.user_id});
        }
      });
  };

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <ScrollView>
          <Formik
            initialValues={{username: '', nik: ''}}
            onSubmit={(values, actions) => {
              // console.log(values);
              resetPassword(values);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required('username dibutuhkan!')
                .min(5, 'username minimal 5 karakter!'),
              nik: Yup.string()
                .required('nik dibutuhkan!')
                .matches(/^[0-9]+$/, 'NIK harus berupa angka!')
                .min(16, 'nik harus 16 digit!')
                .max(16, 'nik harus 16 digit!'),
            })}>
            {formikProps => {
              const {handleChange, handleBlur, handleSubmit, values, errors} =
                formikProps;
              return (
                <View>
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

                  <View style={loginStyle.buttonContainer}>
                    <TouchableOpacity
                      style={loginStyle.button}
                      mode="contained"
                      onPress={() => {
                        handleSubmit();
                      }}>
                      <Text
                        style={[textStyle.button, colorStyle.primerBackground]}>
                        Ganti Kata Sandi
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

export default ResetPasswordScreen;
