import { StyleSheet, Text, View } from "react-native";
import React from "react";
import artikelStyle from "../../styles/artikelStyle";
import layoutStyle from "../../styles/layoutStyle";
const ArtikelScreen = () => {
  return (
    <View style={artikelStyle.container}>
        <View style={artikelStyle.content}>
        <View style={layoutStyle.header}>
      </View>
            <Text>Artikel</Text>
        </View>
    </View>
  );
};

export default ArtikelScreen;
