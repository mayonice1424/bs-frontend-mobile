import React,{useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView,Image} from 'react-native';
import artikelCardStyle from '../../styles/artikelCardStyle';
import cardStyle from '../../styles/cardStyle';
import colorStyle from '../../styles/colorStyle';
import detailArtikelStyle from '../../styles/detailArtikelStyle';

import layoutStyle from '../../styles/layoutStyle';
import textStyle from '../../styles/textStyle';

const DetailArtikelScreen = ({route,navigation}) => {
  useEffect(() => {
    console.log(route.params.data);
  });
  return (
    <View style={detailArtikelStyle.container}>
      <View style={detailArtikelStyle.content}>
        <ScrollView>
          <View>
            <Text style = {[colorStyle.blackForFontAndAnything,textStyle.header]}>{route.params.data.title}</Text>
          </View>
          <View style ={detailArtikelStyle.imageContainer}>
              <Image  style ={detailArtikelStyle.image} source = {route.params.data.thumbnail}/>
          </View>
          <View style={[detailArtikelStyle.date]}>
            <Text style = {[colorStyle.blackForFontAndAnything,textStyle.date]}>{route.params.data.date}</Text>
          </View>
          <View>
            <Text style = {[textStyle.caption1,colorStyle.blackForFontAndAnything,detailArtikelStyle.text]}>{route.params.data.description}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailArtikelScreen;
