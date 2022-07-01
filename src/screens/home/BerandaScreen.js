import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const BerandaScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('Home')}>BerandaScreen</Text>
    </View>
  );
};

export default BerandaScreen;
