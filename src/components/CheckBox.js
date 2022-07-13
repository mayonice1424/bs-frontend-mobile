import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";  
const CheckBox = (props) => {
  const iconName = props.isChecked ?
    "checkbox-blank-outline" : "checkbox-marked";
  return (
      <View style={styles.container}>
              <MaterialCommunityIcons 
                  name={iconName} size={24} color="#26C165" />
          <Text style={styles.title}>{props.title}</Text>
      </View>
  );
};
export default CheckBox;
  
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        borderRadius: 5,
    },
    title: {
        fontSize: 15,
        color: "#26C165",
    },
});