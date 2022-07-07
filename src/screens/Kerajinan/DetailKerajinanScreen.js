import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import layoutStyle from '../../styles/layoutStyle';
import kerajinanStyle from '../../styles/kerajinanStyle';
import Kerajinan from '../routes/KerajinanRoutes';
import cardStyle from '../../styles/cardStyle';

const DetailKerajinanScreen = ({route, navigation}) => {
  return (
    <View style={kerajinanStyle.container}>
      <View style={kerajinanStyle.content}>
        <ScrollView>
          <View></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailKerajinanScreen;
