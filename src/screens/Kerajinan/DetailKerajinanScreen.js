import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import kerajinanStyle from '../../styles/kerajinanStyle';
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
