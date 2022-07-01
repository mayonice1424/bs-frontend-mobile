import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import layoutStyle from '../styles/layoutStyle';
import textStyle from '../styles/textStyle';
import colorStyle from '../styles/colorStyle';

const HeaderComponent = (props, navigation) => {
  return (
    <View style={layoutStyle.box}>
      <View></View>
      <Text style={[textStyle.subtitle2, colorStyle.darkGreen]}>
        {props.halaman}
      </Text>
      <View></View>
    </View>
  );
};

export default HeaderComponent;
