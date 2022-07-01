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
        </ScrollView>
      </View>
    </View>
  );
};

export default RegistrasiScreen;
