import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CheckBox = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="checkbox-marked"
        size={24}
        color="#26C165"
      />
    </View>
  );
};

const NoCheckBox = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="checkbox-blank-outline"
        size={24}
        color="#26C165"
      />
    </View>
  );
};
export {CheckBox, NoCheckBox};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    color: '#26C165',
  },
});
