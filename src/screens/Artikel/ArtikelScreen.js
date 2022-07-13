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
import layoutStyle from '../../styles/layoutStyle';
import artikelStyle from '../../styles/artikelStyle';
import artikelCardStyle from '../../styles/artikelCardStyle';
import moment from 'moment';
import {ip} from '../Ip';

const ArtikelScreen = ({navigation}) => {
  const [artikel, setArtikel] = useState([]);

  const getDataPengumuman = async () => {
    try {
      let response = await fetch(ip + `bang-salam-api/lihat-data-informasi/`);;
      let res = await response.json();
      // console.log(res);
      setArtikel(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataPengumuman();
  }, []);
  return (
    <View style={artikelStyle.container}>
      <View style={artikelStyle.content}>
        <ScrollView>
          <View>
            {artikel
            .slice(0)
            .reverse()
            .map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={artikelCardStyle.container}
                  onPress={() =>
                    navigation.navigate('DetailArtikelScreen', {
                      data: item.id,
                    })
                  }>
                      <View
                      style={{
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={{uri: item.thumbnail_informasi}}
                          style={artikelCardStyle.image}
                        />
                      </View>
                      <View style={[artikelCardStyle.text]}>
                        <Text
                          style={[
                            artikelCardStyle.title,
                            colorStyle.blackForFontAndAnything,
                            textStyle.titleItem,
                          ]}>
                          {item.judul_informasi}
                        </Text>
                        <Text
                          style={[
                            artikelCardStyle.title,
                            colorStyle.blackForFontAndAnything,
                            textStyle.date,
                          ]}>
                          {moment(item.tanggal_dibuat).format('DD MMMM YYYY')}
                        </Text>
                      </View>
                    </View>
                </TouchableOpacity>
              );
            }
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ArtikelScreen;
