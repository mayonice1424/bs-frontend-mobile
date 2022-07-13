import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';
import loginStyle from '../../styles/loginStyle';
import HorizontalLine from '../../components/HorizontalLine';

import {Formik} from 'formik';
import * as Yup from 'yup';

const KalkulatorScreen = () => {
  const [satuan, setSatuan] = useState([
    {
      id: 1,
      namaSatuan: 'Satuan Kg',
      namaBarang: [
        {
          id: 1,
          nama: 'Kg',
          namaSampah: 'Plastik',
          harga: 100,
        },
        {
          id: 2,
          nama: 'Kg',
          namaSampah: 'Kertas',
          harga: 200,
        },
        {
          id: 3,
          nama: 'Kg',
          namaSampah: 'Kaca',
          harga: 300,
        },
      ],
    },
    {
      id: 2,
      namaSatuan: 'Satuan Pcs',
      namaBarang: [
        {
          id: 1,
          nama: 'Pcs',
          namaSampah: 'Plastik',
          harga: 100,
        },
        {
          id: 2,
          nama: 'Pcs',
          namaSampah: 'Kertas',
          harga: 200,
        },
        {
          id: 3,
          nama: 'Pcs',
          namaSampah: 'Kaca',
          harga: 300,
        },
      ],
    },
  ]);
  const [nilai, setNilai] = useState(0);
  return (
    <View style={layoutStyle.container}>
      <ScrollView>
        <View style={layoutStyle.content}>
          <View>
            {satuan.map((item, index) => {
              return (
                <View key={index}>
                  <Text
                    style={[
                      colorStyle.blackForFontAndAnything,
                      textStyle.innerTeks,
                      {marginVertical: 20},
                    ]}>
                    {item.namaSatuan}
                  </Text>
                  {item.namaBarang.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={[
                          {
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginVertical: 5,
                          },
                        ]}>
                        <Text style={[colorStyle.blackForFontAndAnything]}>
                          {item.namaSampah}
                        </Text>
                        <Text style={[colorStyle.blackForFontAndAnything]}>
                          {item.harga} Coin
                        </Text>
                        <View key={index} style={{flexDirection: 'row'}}>
                          <TouchableOpacity
                            style={[
                              colorStyle.backgroundPencairan,
                              {
                                borderRadius: 5,
                                paddingHorizontal: 7,
                                paddingVertical: 4,
                              },
                            ]}
                            onPress={() => {
                              if (nilai > 0) {
                                setNilai(nilai - 1);
                              } else {
                                setNilai(nilai);
                              }
                            }}>
                            <Text
                              style={[
                                colorStyle.blackForFontAndAnything,
                                {fontSize: 15},
                              ]}>
                              -
                            </Text>
                          </TouchableOpacity>
                          <View>
                            <Text
                              style={[
                                colorStyle.blackForFontAndAnything,
                                {fontSize: 15},
                              ]}>
                              {' '}
                              {nilai} {item.nama}{' '}
                            </Text>
                          </View>
                          <TouchableOpacity
                            style={[
                              colorStyle.backgroundPrimerGreenActive,
                              {
                                borderRadius: 5,
                                paddingHorizontal: 7,
                                paddingVertical: 4,
                              },
                            ]}
                            onPress={() => {
                              setNilai(nilai + 1);
                            }}>
                            <Text
                              style={[
                                colorStyle.blackForFontAndAnything,
                                {fontSize: 15},
                              ]}>
                              +
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </View>
              );
            })}
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginVertical: 20,
              }}>
              <Text
                style={[
                  colorStyle.blackForFontAndAnything,
                  {paddingVertical: 10},
                ]}>
                Total Pendapatan Coin : {nilai} Coin
              </Text>
              <Text
                style={[
                  colorStyle.blackForFontAndAnything,
                  {paddingVertical: 10},
                ]}>
                Biaya Admin : {nilai} Coin
              </Text>
              <Text style={[colorStyle.darkGreen, {paddingVertical: 10}]}>
                Total Pendapatan : {nilai} Coin
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default KalkulatorScreen;
