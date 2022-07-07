import React from 'react';
import {View, Text} from 'react-native';

import layoutStyle from '../styles/layoutStyle';

const LayoutScreen = () => {
  const namaHalaman = 'Layout';

  return (
    <View style={layoutStyle.container}>
      <View style={[layoutStyle.content, {justifyContent: 'center'}]}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          {namaHalaman}
        </Text>
      </View>
    </View>
  );
};

export default LayoutScreen;
