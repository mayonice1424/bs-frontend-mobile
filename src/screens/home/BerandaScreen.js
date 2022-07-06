import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import layoutStyle from '../../styles/layoutStyle';
import berandaStyle from '../../styles/berandaStyle';
import textStyle from '../../styles/textStyle';
import colorStyle from '../../styles/colorStyle';
import cardStyle from '../../styles/cardStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
const BerandaScreen = ({navigation}) => {
  const [artikel, setArtikel] = useState([
    {
      id: 1,
      thumbnail: require('../../images/Image/JenisSampah/BotolKaca.jpg'),
      title: 'Sampah Bekas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2020-01-01',
    },
    {
      id: 2,
      thumbnail: require('../.././/images/Image/JenisSampah/BotolKaca.jpg'),
      title: 'Sampah ',
      description: 'Sampah Bekas',
      date: '2020-01-01',
    },
    {
      id: 3,
      thumbnail: require('../.././/images/Image/JenisSampah/BotolKaca.jpg'),
      title: 'Sampah ',
      description: 'Sampah Bekas',
      date: '2020-01-01',
    },
    {
      id: 4,
      thumbnail: require('../.././/images/Image/JenisSampah/BotolKaca.jpg'),
      title: 'Sampah ',
      description: 'Sampah Bekas',
      date: '2020-01-01',
    }
  ]);
  return (
    <View style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <View style = {berandaStyle.box}>
          <View>
            <Image 
            style={berandaStyle.image}
            source={require('../../images/Image/foto.png')} />
          </View>
          <View style={berandaStyle.textBox}>
            <Text style={[textStyle.titleItem,colorStyle.blackForFontAndAnything]}>Hai, Sarah Amelia</Text>
            <Text style= {textStyle.innerTeks}>Apakah sudah menjual sampah hari ini?</Text>
          </View>
        </View>
        <View style={[berandaStyle.textBOX]}>
          <LinearGradient  start={{ x: 0.91, y: 0 }} end={{ x: 0.91, y: 1.12 }}  colors={['#63E798', '#3CCA75']} style={[berandaStyle.linearGradient]}>
          <View style={berandaStyle.wrap}>
            <View style={berandaStyle.leftWrap}>
              <View style={berandaStyle.viewSaldo}>
              <Image 
                style = {berandaStyle.imageCoin}
                source={require('../../images/Image/WhiteCoin.png')} 
              />
              <Text style={[textStyle.body1,colorStyle.whiteForCard]}>Salam Coin: 70.0000 </Text>
              </View>
              <View >
            </View>
              <Text style={[textStyle.body1,colorStyle.whiteForCard]}>Total Sampah Terkumpul: 1000 Kg</Text>
              </View>
              <View style = {berandaStyle.rightWrap}>
                <Text style={[textStyle.body4,colorStyle.whiteForCard]}> No Rekening : 131938131929129</Text>
              </View>
              </View>
          </LinearGradient>
          </View>
          <View>
            <View style ={[berandaStyle.box1]} >
            <TouchableOpacity style = {[colorStyle.backgroundSoftPurple,berandaStyle.containerBox]}>
              <View style = {{flexDirection : 'row'}}>
              <Ionicons name="calendar" size={30} style ={colorStyle.blackForFontAndAnything} />
              <Text style={[textStyle.body1,colorStyle.blackForFontAndAnything,{marginLeft:10, marginTop:5}]}>Jadwal</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {[colorStyle.backgroundSoftYellow,berandaStyle.containerBox]}>
            <View style = {{flexDirection : 'row',width:'70%', marginTop:11}}>
            <Ionicons name="receipt" size={30} style ={colorStyle.blackForFontAndAnything} />
            <Text style={[textStyle.body1,colorStyle.blackForFontAndAnything,{marginLeft:10}]}>Penjualan Sampah</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View  style ={berandaStyle.box2}>
            <TouchableOpacity style = {[colorStyle.backgroundSoftGreen,berandaStyle.containerBox]}>
            <View style = {{flexDirection : 'row',width:'70%', marginTop:11}}>
            <Ionicons name="wallet" size={30} style={colorStyle.blackForFontAndAnything} />
            <Text style={[textStyle.body1,colorStyle.blackForFontAndAnything,{marginLeft:10}]}>Pencairan Dana</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style = {[colorStyle.backgroundSoftRed,berandaStyle.containerBox]}>
            <View style = {{flexDirection : 'row',width:'70%', marginTop:11}}>
            <Foundation name="telephone" size={30} style={colorStyle.blackForFontAndAnything} />
            <Text style={[textStyle.body1,colorStyle.blackForFontAndAnything,{marginLeft:10}]}>Pusat Bantuan</Text>
            </View>
            </TouchableOpacity>
          </View>
          <Text style={[textStyle.body1,colorStyle.blackForFontAndAnything,{marginTop:15}]}>Pengumuman</Text>
          <ScrollView style={{flex:1}}>
            {artikel.map((item,index) => {
              return (
                <TouchableOpacity key={index} style={cardStyle.container}>
                  <View >
                  <Image style={cardStyle.image} source={item.thumbnail} />
                  </View>
                  <View >
                    <Text style={[textStyle.caption,colorStyle.blackForFontAndAnything]}>{item.title}</Text>
                    <Text style={[textStyle.date,colorStyle.darkGreen]}>{item.date}</Text>
                    <View style={{width:190}}>
                    <Text style={[textStyle.body5,colorStyle.blackForFontAndAnything]} numberOfLines={2} ellipsizeMode='tail'>
                      {item.description}
                    </Text>
                    </View>
                </View>
                </TouchableOpacity>
              )
            }
            )
          }
          </ScrollView>
          </View>
      </View>
    </View>
  );
};

export default BerandaScreen;
