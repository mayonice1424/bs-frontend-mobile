import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import kerajinanStyle from '../../styles/kerajinanStyle';
import cardStyle from '../../styles/cardStyle';
import {ip} from '../Ip';
const KerajinanScreen = ({navigation}) => {
  const getDataKerajinan = async () => {
    try {
      let response = await fetch(`${ip}bang-salam-api/kerajinan/`);
      let res = await response.json();
      // console.log(res);
      setKerajinan(res);
    } catch (error) {
      // console.log('error: ', error);
    }
  };

  useEffect(() => {
    getDataKerajinan();
  }, []);

  const [kerajinan, setKerajinan] = useState([]);

  const moneySplitbyDot = money => {
    let number = money;
    let str = number.toString();
    let result = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return result;
  };

  return (
    <View style={kerajinanStyle.container}>
      <View style={kerajinanStyle.content}>
        <ScrollView>
          <View style={cardStyle.body}>
            {kerajinan.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={cardStyle.container}
                  onPress={() =>
                    navigation.navigate('DetailKerajinanScreen', {
                      data: item.id,
                    })
                  }>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View>
                      <Image
                        source={{uri: item.foto_kerajinan}}
                        style={cardStyle.image}
                      />
                    </View>
                    <View style={cardStyle.text}>
                      <Text
                        style={[
                          textStyle.caption,
                          colorStyle.blackForFontAndAnything,
                        ]}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        {item.nama_kerajinan}
                      </Text>
                      <Text style={[textStyle.body1, colorStyle.darkGreen]}>
                        <Text>Coin </Text>
                        {moneySplitbyDot(item.harga_kerajinan)}
                      </Text>
                      <View style={{width: 190}}>
                        <Text
                          style={[
                            textStyle.body5,
                            colorStyle.blackForFontAndAnything,
                          ]}
                          numberOfLines={2}
                          ellipsizeMode="tail">
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default KerajinanScreen;
