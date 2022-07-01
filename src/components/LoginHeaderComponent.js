import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import layoutStyle from '../styles/layoutStyle';
import textStyle from '../styles/textStyle';
import colorStyle from '../styles/colorStyle';

import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginHeaderComponent = (props, {navigation}) => {
  return (
    <View style={layoutStyle.box}>
      <TouchableOpacity
        style={layoutStyle.touchable}
        onPress={() => {
          navigation.navigate(props.screen);
        }}>
        <AntDesign
          style={[layoutStyle.icon, colorStyle.darkGreen]}
          name="left"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <Text style={[layoutStyle.text, textStyle.judul2, colorStyle.darkGreen]}>
        {props.halaman}
      </Text>
      <View></View>
    </View>
  );
};

export default LoginHeaderComponent;
