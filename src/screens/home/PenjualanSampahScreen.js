import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import penjualanSampahStyle from '../../styles/penjualanSampahStyle';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
const Stack = createNativeStackNavigator();
const PenjualanSampahScreen = ({navigation}) => {
  return (
    <View style={[penjualanSampahStyle.container]}>
      <View style={[penjualanSampahStyle.content]}>
        <ScrollView>
          <View
            style={{
              marginTop: '10%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={[
                penjualanSampahStyle.box,
                ,
                colorStyle.backgroundSoftPurple,
              ]}
              onPress={() => {
                navigation.navigate('KalkulatorScreen');
              }}>
              <Text
                style={[colorStyle.blackForFontAndAnything, textStyle.body1]}>
                Kalkulator
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                penjualanSampahStyle.box,
                colorStyle.backgroundSoftYellow,
              ]}
              onPress={() => {
                navigation.navigate('JualSampahScreen');
              }}>
              <Text
                style={[colorStyle.blackForFontAndAnything, textStyle.body1]}>
                Jual Sampah
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default PenjualanSampahScreen;
