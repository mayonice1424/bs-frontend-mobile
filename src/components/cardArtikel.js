import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';

const ArtikelCard  = ({navigation}) => {
const [artikel, setArtikel] = useState([
    {
      id: 1,
      title: 'Sampah Bekas',
      description: 'Sampah Bekas',
      date: '2020-01-01',
    }
  ]);
<View>
            {artikel.map((item,index) => {
              return (
                <View key={index}>
                    <Text> judul : {item.title}</Text>
                    <Text>{item.date}</Text>
                    <Text>{item.description}</Text>
                </View>
              )
            }
            )
          }
</View>
}
export default ArtikelCard;