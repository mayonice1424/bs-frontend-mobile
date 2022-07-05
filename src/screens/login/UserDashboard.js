import React from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import homeLoginStyle from '../../styles/homeLogin';
import textStyle from '../../styles/textStyle';
const UserDashboard = ({navigation}) => {
  return (
    <View style={homeLoginStyle.container}>
      <View style={homeLoginStyle.logoHeader}>
        <Image
          style={{width: 38, height: 42}}
          source={require('../../images/Image/LOGO_ITERA.png')}
        />
        <Image
          style={{width: 96, height: 46}}
          source={require('../../images/Image/Logo_Purino.png')}
        />
      </View>
      <View style={homeLoginStyle.logo}>
        <Image source={require('../../images/Image/Logo.png')} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={[
            homeLoginStyle.button,
            colorStyle.backgroundPrimerGreenActive,
          ]}>
          <Text
            style={[
              homeLoginStyle.text,
              textStyle.button,
              colorStyle.whiteForCard,
            ]}>
            Masuk
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Registrasi');
          }}
          style={[
            homeLoginStyle.button,
            colorStyle.backgroundWhiteForCard,
            homeLoginStyle.shadowProp,
          ]}>
          <Text
            style={[
              homeLoginStyle.text,
              textStyle.button,
              colorStyle.blackForFontAndAnything,
            ]}>
            Registrasi
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={homeLoginStyle.halfCircle}
          source={require('../../images/Image/Half_Circle.png')}
        />
      </View>
    </View>
  );
};

export default UserDashboard;
