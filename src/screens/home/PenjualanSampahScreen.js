import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import penjualanSampahStyle from '../../styles/penjualanSampahStyle';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import cardStyle from '../../styles/cardStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const PenjualanSampahScreen = ({navigation}) => {
  const [kategori, setKategori] = useState([
    {
      id: 1,
      kategoriSampah: 'PET',
      dataSampah:[
        { id: 1, namaSampah: 'Botol Kaca',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
    {
      id: 2,
      kategoriSampah: 'KOMPOST',
      dataSampah:[
        { id: 1, namaSampah: 'Botol Kaca',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
    {
      id: 3,
      kategoriSampah: 'PLASTIK',
      dataSampah:[
        { id: 1, namaSampah: 'Botol',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
    {
      id: 4,
      kategoriSampah: 'KACA',
      dataSampah:[
        { id: 1, namaSampah: 'Botol Kaca',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
    {
      id: 5,
      kategoriSampah: 'KULIT',
      dataSampah:[
        { id: 1, namaSampah: 'Botol Kaca',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
    {
      id: 6,
      kategoriSampah: 'PARASUT',
      dataSampah:[
        { id: 1, namaSampah: 'Botol Kaca',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
    {
      id: 7,
      kategoriSampah: 'SIRUP',
      dataSampah:[
        { id: 1, namaSampah: 'Botol Kaca',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
    {
      id: 8,
      kategoriSampah: 'Botol',
      dataSampah:[
        { id: 1, namaSampah: 'Botol Kaca',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 2, namaSampah: 'Botol Plastik',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 3, namaSampah: 'Botol Metal',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
        { id: 4, namaSampah: 'Botol Bekas',kuantitas:'1Kg', harga: '+ 10.000', foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg')},
      ]
    },
  ]);
  const [active, setActive] = useState(1);
  return (
    <View style={[penjualanSampahStyle.container]}>
      <View style={[penjualanSampahStyle.content]}>
        <ScrollView>
          <View
            style={{
              marginVertical: '10%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={[
                penjualanSampahStyle.box,
                ,
                colorStyle.backgroundSoftPurple,
              ]}>
              <Ionicons
                name="calculator"
                size={28}
                style={[colorStyle.blackForFontAndAnything, {marginRight: 5}]}
              />
              <Text
                style={[colorStyle.blackForFontAndAnything, textStyle.body1]}>
                Kalkulator
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                penjualanSampahStyle.box,
                colorStyle.backgroundSoftYellow,
              ]}>
              <Ionicons
                name="receipt"
                size={28}
                style={[colorStyle.blackForFontAndAnything, {marginRight: 5}]}
              />
              <Text
                style={[colorStyle.blackForFontAndAnything, textStyle.body1]}>
                Jual Sampah
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[colorStyle.darkGreen, textStyle.body2]}>
            Harga Sampah Anorganik
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              {kategori.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setActive(item.id);
                    }}
                    key={index}
                    style={[
                      penjualanSampahStyle.button,
                      index === active-1
                        ? colorStyle.backgroundPrimerGreenActive
                        : {backgroundColor:'#D5DBD1'}
                    ]}>
                    <Text
                        style={[ textStyle.boxSlideFont,
                        index === active-1 ?
                        colorStyle.whiteForCard: colorStyle.blackForFontAndAnything
                      ]}>
                      {item.kategoriSampah}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={{marginTop:10}}>
            {kategori.map((item, index) => {
              if (item.id === active) {
                return (
                  <View key={index}>
                    {item.dataSampah.map((item, index) => {
                      return (
                        <View key={index} style={[cardStyle.container]}>
                          <View style={{
                                flexDirection: 'row',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                }}>
                            <View>
                              <Image
                                source={item.foto}
                                style={cardStyle.image}
                              />
                              </View>
                            <View>
                              <Text style={[textStyle.titleItem,colorStyle.blackForFontAndAnything]}>{item.namaSampah}</Text>
                              <Text style={[textStyle.body3,colorStyle.blackForFontAndAnything]}>{item.kuantitas}</Text>
                              <Text style={[textStyle.body2,colorStyle.darkGreen]}>{item.harga}</Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                );
              }
            }
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default PenjualanSampahScreen;
