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
const KerajinanScreen = ({navigation}) => {
  const getDataKerajinan = async () => {
    try {
      let response = await fetch(
        `http://192.168.74.221:8000/bang-salam-api/kerajinan/`,
      );
      let res = await response.json();
      console.log(res);
      setKerajinan(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    getDataKerajinan();
  }, []);

  const [kerajinan, setKerajinan] = useState([]);

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
                    <View>
                      <Text
                        style={[
                          textStyle.caption,
                          colorStyle.blackForFontAndAnything,
                        ]}>
                        {item.nama_kerajinan}
                      </Text>
                      <Text style={[textStyle.body1, colorStyle.darkGreen]}>
                        <Text>Rp. </Text>
                        {item.harga_kerajinan}
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
