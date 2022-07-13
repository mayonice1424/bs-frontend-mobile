import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import profilStyleScreen from '../../styles/profilStyle';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ip} from '../Ip';
const ProfilScreen = ({navigation}) => {
  const [user, setUser] = useState({
    id: '0000-0000-0000',
    nama: 'Pengguna',
    foto_profil: 'https://via.placeholder.com/150',
    saldo: '0',
    status_verifikasi: '0',
  });

  const [token, setToken] = useState('');

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    const tokens = JSON.parse(token);
    setToken(tokens.token);
    let data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + tokens.token,
      },
    };
    try {
      let response = await fetch(
        `${ip}bang-salam-api/lihat-users/` + tokens.id + `/`,
        data,
      );
      let res = await response.json();
      console.log(res);
      setUser(res);
      // console.log(tokens.token);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('cekkk : ', token);
  console.log('cekkk 2 : ', user);

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={profilStyleScreen.container}>
      <View style={profilStyleScreen.content}>
        <View style={profilStyleScreen.profilContainer}>
          <View style={[profilStyleScreen.imageContainer]}>
            <Image
              style={profilStyleScreen.image}
              source={{uri: user.foto_profil}}
            />
          </View>
          <View style={{marginLeft: '5%'}}>
            <View>
              <Text
                style={[
                  colorStyle.blackForFontAndAnything,
                  profilStyleScreen.name,
                  textStyle.body2,
                ]}>
                {user.nama}
              </Text>
              <Text
                style={[
                  colorStyle.blackForFontAndAnything,
                  profilStyleScreen.name,
                  textStyle.body4,
                ]}>
                @{user.username}
              </Text>
            </View>
            <View
              style={[
                colorStyle.backgroundDarkGreen,
                profilStyleScreen.status,
              ]}>
              <Text
                style={[
                  colorStyle.whiteForCard,
                  profilStyleScreen.name,
                  textStyle.body1,
                ]}>
                {user.status_verifikasi === '0'
                  ? 'Belum diverifikasi'
                  : 'Terverifikasi'}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CekSaldo', {data_user: user, token: token});
          }}
          style={[
            colorStyle.backgroundPrimerGreenActive,
            profilStyleScreen.profilButton,
          ]}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons
              name="history"
              size={25}
              style={colorStyle.whiteForCard}
            />
            <Text
              style={[
                colorStyle.whiteForCard,
                profilStyleScreen.name,
                textStyle.body1,
                {marginLeft: 20},
              ]}>
              Riwayat Transaksi
            </Text>
          </View>
          <View style={{marginLeft: '35%'}}>
            <AntDesign name="right" size={20} style={colorStyle.whiteForCard} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            colorStyle.backgroundPrimerGreenActive,
            profilStyleScreen.profilButton,
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Feather name="edit" size={23} style={colorStyle.whiteForCard} />
            <Text
              style={[
                colorStyle.whiteForCard,
                profilStyleScreen.name,
                textStyle.body1,
                {marginLeft: 20},
              ]}>
              Edit Profil
            </Text>
          </View>
          <View style={{marginLeft: '60%'}}>
            <AntDesign name="right" size={20} style={colorStyle.whiteForCard} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            colorStyle.backgroundPrimerGreenActive,
            profilStyleScreen.profilButton,
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="settings"
              size={25}
              style={colorStyle.whiteForCard}
            />
            <Text
              style={[
                colorStyle.whiteForCard,
                profilStyleScreen.name,
                textStyle.body1,
                {marginLeft: 20},
              ]}>
              Pengaturan
            </Text>
          </View>
          <View style={{marginLeft: '52%'}}>
            <AntDesign name="right" size={20} style={colorStyle.whiteForCard} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            colorStyle.backgroundPrimerGreenActive,
            profilStyleScreen.profilButton,
          ]}
          onPress={() => {
            AsyncStorage.removeItem('token');
            navigation.navigate('LoginRoutes');
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="exit" size={25} style={colorStyle.whiteForCard} />
            <Text
              style={[
                colorStyle.whiteForCard,
                profilStyleScreen.name,
                textStyle.body1,
                {marginLeft: 20},
              ]}>
              Keluar
            </Text>
          </View>
          <View style={{marginLeft: '66%'}}>
            <AntDesign name="right" size={20} style={colorStyle.whiteForCard} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfilScreen;
