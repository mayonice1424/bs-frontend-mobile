import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import layoutStyle from '../../styles/layoutStyle';
import loginStyle from '../../styles/loginStyle';

const LoginScreen = ({navigation}) => {
  const [checkToken, setCheckToken] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        if (value != null) {
          navigation.navigate('TabNavigator');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async respons => {
    console.log(respons);
    if (respons != null) {
      try {
        var user = {
          id: respons.user['id'],
          token: respons.token,
        };
        await AsyncStorage.setItem('token', JSON.stringify(user));
      } catch (error) {
        console.log(error);
      } finally {
        console.log('masuk sini');
        navigation.navigate('TabNavigator');
      }
    }
  };

  const loginUser = async credentials => {
    return await fetch(
      `http://192.168.74.221:8000/bang-salam-api/login-user/`,
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
        setCheckToken(response);
        if (response.token != null) {
          setData(response);
        } else if (response.non_field_errors[0] == 'Incorrect Credentials') {
          console.log('Salah');
          setModalVisible(true);
        }
      })
      .catch(error => console.log(error));
  };

  const namaHalaman = 'Masuk';

  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <ScrollView>
          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={(values, actions) => {
              console.log(values);
              loginUser(values);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required('username is required!')
                .min(3, 'username'),
              password: Yup.string()
                .required('Password is required!')
                .min(8, 'Password is too short!'),
            })}>
            {formikProps => {
              const {handleChange, handleBlur, handleSubmit, values, errors} =
                formikProps;
              return (
                <View>
                  <TextInput
                    style={loginStyle.input}
                    placeholder="username"
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
                    placeholder="Password"
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Reset Password')}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
