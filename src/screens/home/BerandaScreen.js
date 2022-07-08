import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import layoutStyle from '../../styles/layoutStyle';
import berandaStyle from '../../styles/berandaStyle';
import textStyle from '../../styles/textStyle';
import colorStyle from '../../styles/colorStyle';
import cardStyle from '../../styles/cardStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import AsyncStorage from '@react-native-async-storage/async-storage';

const BerandaScreen = ({navigation}) => {
  const [artikel, setArtikel] = useState([
    {
      id: 1,
      thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
      title: 'Sampah Bekas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2020-01-01',
    },
    {
      id: 2,
      thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
      title: 'Sampah Bekas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2020-01-01',
    },
    {
      id: 3,
      thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
      title: 'Sampah Bekas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2020-01-01',
    },
  ]);

  const [user, setUser] = useState({
    id: '0000-0000-0000',
    nama: 'Pengguna',
    foto_profil: 'https://via.placeholder.com/150',
    saldo: '0',
  });

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    const tokens = JSON.parse(token);
    let data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + tokens.token,
      },
    };
    try {
      let response = await fetch(
        `http://192.168.74.221:8000/bang-salam-api/lihat-users/` +
          tokens.id +
          `/`,
        data,
      );
      let res = await response.json();
      console.log(res);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={layoutStyle.container}>
        <View style={berandaStyle.content}>
          <TouchableOpacity
            style={berandaStyle.profile}
            onPress={() => navigation.navigate('Profil')}>
            <View>
              <Image
                style={berandaStyle.image}
                source={{uri: user.foto_profil}}
              />
            </View>
            <View style={berandaStyle.textProfile}>
              <Text
                style={[
                  textStyle.titleItem,
                  colorStyle.blackForFontAndAnything,
                ]}>
                Hai, {user.nama}
              </Text>
              <Text
                style={[
                  textStyle.innerTeks,
                  colorStyle.blackForFontAndAnything,
                ]}>
                Apakah sudah menjual sampah hari ini?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CekSaldo')}>
            <View style={[berandaStyle.userInfo]}>
              <LinearGradient
                start={{x: 0.91, y: 0}}
                end={{x: 0.91, y: 1.12}}
                colors={['#63E798', '#3CCA75']}
                style={[berandaStyle.linearGradient]}>
                <View style={{flexDirection: 'column'}}>
                  <View style={berandaStyle.wrap}>
                    <View style={berandaStyle.viewSaldo}>
                      <Image
                        style={berandaStyle.imageCoin}
                        source={require('../../images/Image/WhiteCoin.png')}
                      />
                      <Text style={[textStyle.body1, colorStyle.whiteForCard]}>
                        Salam Coin: {user.saldo}{' '}
                      </Text>
                    </View>
                    <View style={berandaStyle.rightWrap}>
                      <Text style={[textStyle.body4, colorStyle.whiteForCard]}>
                        {' '}
                        No Rekening : {user.id}
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <View style={[berandaStyle.boxRow]}>
            <TouchableOpacity
              style={[
                colorStyle.backgroundSoftPurple,
                berandaStyle.containerBox,
              ]}
              onPress={() => navigation.navigate('Jadwal')}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="calendar"
                  size={30}
                  style={colorStyle.blackForFontAndAnything}
                />
                <Text
                  style={[
                    textStyle.body1,
                    colorStyle.blackForFontAndAnything,
                    {marginLeft: 10, marginTop: 5},
                  ]}>
                  Jadwal
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                colorStyle.backgroundSoftYellow,
                berandaStyle.containerBox,
              ]}
              onPress={() => navigation.navigate('PenjualanSampah')}>
              <View style={berandaStyle.boxContent}>
                <Ionicons
                  name="receipt"
                  size={30}
                  style={colorStyle.blackForFontAndAnything}
                />
                <Text
                  style={[
                    textStyle.body1,
                    colorStyle.blackForFontAndAnything,
                    {marginLeft: 10},
                  ]}>
                  Penjualan Sampah
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={berandaStyle.boxRow}>
            <TouchableOpacity
              style={[
                colorStyle.backgroundSoftGreen,
                berandaStyle.containerBox,
              ]}
              onPress={() => navigation.navigate('PencairanDana')}>
              <View style={berandaStyle.boxContent}>
                <Ionicons
                  name="wallet"
                  size={30}
                  style={colorStyle.blackForFontAndAnything}
                />
                <Text
                  style={[
                    textStyle.body1,
                    colorStyle.blackForFontAndAnything,
                    {marginLeft: 10},
                  ]}>
                  Pencairan Dana
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[colorStyle.backgroundSoftRed, berandaStyle.containerBox]}
              onPress={() => navigation.navigate('PusatBantuan')}>
              <View style={berandaStyle.boxContent}>
                <Foundation
                  name="telephone"
                  size={30}
                  style={colorStyle.blackForFontAndAnything}
                />
                <Text
                  style={[
                    textStyle.body1,
                    colorStyle.blackForFontAndAnything,
                    {marginLeft: 10},
                  ]}>
                  Pusat Bantuan
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[berandaStyle.artikelLayout]}>
            <Text style={[textStyle.body1, colorStyle.blackForFontAndAnything]}>
              Pengumuman
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Artikel')}>
              <Text
                style={[
                  colorStyle.blackForFontAndAnything,
                  textStyle.caption2,
                ]}>
                Selebihnya {'>'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={cardStyle.body}>
            {artikel.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={cardStyle.container}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View>
                      <Image source={item.thumbnail} style={cardStyle.image} />
                    </View>
                    <View>
                      <Text
                        style={[
                          textStyle.caption,
                          colorStyle.blackForFontAndAnything,
                        ]}>
                        {item.title}
                      </Text>
                      <Text style={[textStyle.date, colorStyle.darkGreen]}>
                        {item.date}
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
        </View>
      </View>
    </ScrollView>
  );
};

export default BerandaScreen;
