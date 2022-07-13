import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import CheckBox from "../../components/CheckBox";
import colorStyle from '../../styles/colorStyle';
import layoutStyle from '../../styles/layoutStyle';
import saldoStyle from '../../styles/saldoStyle';
import textStyle from '../../styles/textStyle';
import loginStyle from '../../styles/loginStyle';
import HorizontalLine from '../../components/HorizontalLine';

import {ip} from '../Ip';
import {Formik} from 'formik';
import * as Yup from 'yup';

const KalkulatorScreen = ({navigation}) => {
  const [satuan, setSatuan] = useState([]);
  const [nilai, setNilai] = useState([]);
  const [harga, setHarga] = useState([]);
  const [totalPendapatan, setTotalPendapatan] = useState(0);
  const [biayaAdmin, setBiayaAdmin] = useState(0);
  const [total, setTotal] = useState(0);

  const getDataSampah = async () => {
    try {
      let response = await fetch(
        ip + `bang-salam-api/sampah-tipe-kuantitas/`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const responseJson = await response.json();
      // console.log('responseJson :', responseJson[0].data);
      setSatuan(responseJson);
      let hargaNilai = [];
      responseJson.map(item => {
        item.data.map(item2 => {
          let data = {
            id: item2.id,
            harga: item2.harga,
            total_harga: 0,
            kuantitas: 0,
            biaya_admin: 0,
          };
          hargaNilai.push(data);
        });
      });
      setHarga(hargaNilai);
      console.log('harga :', hargaNilai);
    } catch (error) {
      console.log('error :', error);
    }
  };

  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    getDataSampah();
  }, []);

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
                    Satuan {Capitalize(item.tipe)}
                  </Text>

                  {item.data.map((item, index) => {
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
                          {item.nama_sampah}
                        </Text>
                        <Text style={[colorStyle.blackForFontAndAnything]}>
                          {harga.map(item2 => {
                            if (item2.id === item.id) {
                              return item2.total_harga;
                            }
                          })}{' '}
                          Coin
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
                              setHarga(
                                harga.map(item2 => {
                                  if (item2.id === item.id) {
                                    if (item2.kuantitas === 0) {
                                      item2.kuantitas = 0;
                                    } else {
                                      item2.kuantitas = item2.kuantitas - 1;
                                      item2.total_harga =
                                        item2.kuantitas * item2.harga;
                                      item2.biaya_admin =
                                        item2.total_harga * 0.1;
                                      let pendapatanKeseluruhan = 0;
                                      let biayaAdminKeseluruhan = 0;
                                      harga.map(cari => {
                                        pendapatanKeseluruhan +=
                                          cari.total_harga;
                                        biayaAdminKeseluruhan +=
                                          cari.biaya_admin;
                                      });
                                      setTotalPendapatan(pendapatanKeseluruhan);
                                      setBiayaAdmin(biayaAdminKeseluruhan);
                                      setTotal(
                                        pendapatanKeseluruhan -
                                          biayaAdminKeseluruhan,
                                      );
                                    }
                                  }
                                  return item2;
                                }),
                              );
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
                              {harga.map(item2 => {
                                if (item2.id === item.id) {
                                  return item2.kuantitas;
                                }
                              })}
                              {item.nama}{' '}
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
                              setHarga(
                                harga.map(item2 => {
                                  if (item2.id === item.id) {
                                    item2.kuantitas = item2.kuantitas + 1;
                                    item2.total_harga =
                                      item2.kuantitas * item2.harga;
                                    item2.biaya_admin = item2.total_harga * 0.1;

                                    let pendapatanKeseluruhan = 0;
                                    let biayaAdminKeseluruhan = 0;
                                    harga.map(cari => {
                                      pendapatanKeseluruhan += cari.total_harga;
                                      biayaAdminKeseluruhan += cari.biaya_admin;
                                    });
                                    setTotalPendapatan(pendapatanKeseluruhan);
                                    setBiayaAdmin(biayaAdminKeseluruhan);
                                    setTotal(
                                      pendapatanKeseluruhan -
                                        biayaAdminKeseluruhan,
                                    );
                                  }
                                  return item2;
                                }),
                              );
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
                Total Pendapatan Coin : {totalPendapatan} Coin
              </Text>
              <Text
                style={[
                  colorStyle.blackForFontAndAnything,
                  {paddingVertical: 10},
                ]}>
                Biaya Admin : {biayaAdmin} Coin
              </Text>
              <Text style={[colorStyle.darkGreen, {paddingVertical: 10}]}>
                Total Pendapatan : {total} Coin
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default KalkulatorScreen;
