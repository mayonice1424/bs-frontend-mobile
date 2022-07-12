import React, {useEffect} from 'react';
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

const ResetPassword2Screen = ({route, navigation}) => {
  const resetPassword = async credentials => {
    // console.log({password: credentials});
    return await fetch(
      `http://10.0.242.48:8000/bang-salam-api/update-password/` +
        route.params.user_id +
        '/',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({password: credentials}),
      },
    )
      .then(response => response.json())
      .then(response => {
        // console.log(response.user_id);
        navigation.navigate('Login');
      })
      .catch(error => {
        // console.log(error);
        Alert.alert('Tidak Sesuai', 'Kata sandi tidak sesuai dengan data');
      });
  };

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <ScrollView>
          <Formik
            initialValues={{password: '', validasiKataSandi: ''}}
            onSubmit={(values, actions) => {
              // console.log(values);
              resetPassword(values.password);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
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

export default ResetPassword2Screen;
