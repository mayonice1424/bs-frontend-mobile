import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import jadwalStyle from '../../styles/jadwalStyle';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import berandaStyle from '../../styles/berandaStyle';

const Jadwal = () => {
  const [data, setData] = useState([
    {
      id: 1,
      hari: 'Senin',
      jam: '08:00 - 16:00',
    },
    {
      id: 2,
      hari: 'Selasa',
      jam: '08:00 - 16:00',
    },
    {
      id: 3,
      hari: 'Rabu',
      jam: '08:00 - 16:00',
    },
    {
      id: 4,
      hari: 'Kamis',
      jam: '08:00 - 16:00',
    },
    {
      id: 5,
      hari: 'Jumat',
      jam: '08:00 - 11:00',
    },
    {
      id: 6,
      hari: 'Sabtu',
      jam: '08:00 - 12:00',
    },
  ]);

  return (
    <View style={jadwalStyle.container}>
      <ScrollView>
        <View style={jadwalStyle.content}>
          <View style={[jadwalStyle.linearGradient, {marginTop: '6%'}]}>
            <LinearGradient
              start={{x: 0.91, y: 0}}
              end={{x: 0.91, y: 1.12}}
              colors={['#63E798', '#3CCA75']}
              style={[jadwalStyle.linearGradient]}>
              <View>
                <Text style={[textStyle.body2, colorStyle.whiteForCard]}>
                  Tanggal dan Waktu Pencairan{' '}
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              marginHorizontal: '1%',
              maxWidth: '98%',
              paddingVertical: '5%',
              borderRadius: 10,
              backgroundColor: '#FCFFFC',
              borderColor: '#171717',
              shadowOpacity: 0.8,
              borderRadius: 10,
              elevation: 6,
              shadowRadius: 15,
            }}>
            <View
              style={[
                {
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}>
              <View
                style={[
                  colorStyle.backgroundDarkGreen,
                  {
                    borderRadius: 180,
                    paddingHorizontal: '7%',
                    paddingVertical: '10%',
                  },
                ]}>
                <Text style={[textStyle.judul, colorStyle.whiteForCard]}>
                  01-07
                </Text>
              </View>
              <View>
                <Text
                  style={[textStyle.body2, colorStyle.blackForFontAndAnything]}>
                  Setiap Awal Bulan
                </Text>
              </View>
            </View>
          </View>
          <View style={[jadwalStyle.linearGradient, {marginTop: '10%'}]}>
            <LinearGradient
              start={{x: 0.91, y: 0}}
              end={{x: 0.91, y: 1.12}}
              colors={['#63E798', '#3CCA75']}
              style={[jadwalStyle.linearGradient]}>
              <View>
                <Text style={[textStyle.body2, colorStyle.whiteForCard]}>
                  Hari dan Waktu Operasional Bang Salam
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View>
            <View
              style={[
                {
                  maxWidth: '98%',
                  paddingVertical: '5%',
                  borderRadius: 10,
                  backgroundColor: '#FCFFFC',
                  borderColor: '#171717',
                  shadowOpacity: 0.8,
                  borderRadius: 10,
                  elevation: 6,
                  shadowRadius: 15,
                },
              ]}>
              {data.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: '5%',
                        marginHorizontal: '10%',
                      },
                    ]}>
                    <Ionicons
                      name="calendar"
                      size={20}
                      style={colorStyle.darkGreen}
                    />
                    <Text
                      style={[
                        textStyle.innerTeks,
                        colorStyle.blackForFontAndAnything,
                      ]}>
                      {item.hari}
                    </Text>
                    <Text
                      style={[
                        textStyle.innerTeks,
                        colorStyle.blackForFontAndAnything,
                      ]}>
                      {item.jam}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Jadwal;
