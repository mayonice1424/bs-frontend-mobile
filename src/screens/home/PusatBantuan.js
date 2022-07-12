import {View,Text, TouchableOpacity, ScrollView} from 'react-native';
import React,{useState} from 'react';
import colorStyle from '../../styles/colorStyle';
import pusatBantuanStyle from '../../styles/pusatBantuanStyle';
import textStyle from '../../styles/textStyle';
import HorizontalLine from '../../components/HorizontalLine';
import cardStyle from '../../styles/cardStyle';
const PusatBantuan = () => {
    const [pertanyaan, setPertanyaan] = useState([
        {   
            id : 1,
            kategori:'Umum',
            subKategori:[{
                id : 1,
                pertanyaan: 'Apa itu Bang Salam ?',
                jawaban: 'Bang Salam merupakan salah satu bentuk kepedulian terhadap lingkungan dengan memanfaatkan bang sampah '
            },{
                id : 2,
                pertanyaan: 'Persyaratan Daftar Bang Salam ?',
                jawaban: 'Bang Salam merupakan salah satu bentuk kepedulian terhadap lingkungan dengan memanfaatkan bang sampah '
            },{
                id : 3,
                pertanyaan: 'Dimana letak Bang Salam ?',
                jawaban: 'Bang Salam merupakan salah satu bentuk kepedulian terhadap lingkungan dengan memanfaatkan bang sampah '
            },
        ]},
        {
            id : 2,
            kategori:'Penjualan Sampah',
            subKategori:[{
                id : 1,
                pertanyaan: 'Bagaimana Cara Menjual Sampah?',
                jawaban: 'Sampah anorganik dapat dijual pada Bang Salam yang berlokasi di pesantren pada Kecamatan Candipuro. Sampah terlebih dahulu dipisah oleh pengguna agar mudah untuk menimbang berdasarkan kategori sampah. Untuk melakukan permintaan penjualan sampah dapat mengajukannya pada menu jual sampah pada aplikasi. '
            },{
                id : 2,
                pertanyaan: 'Apakah ada minimal berat atau pcs untuk menjual sampah?',
                jawaban: 'Bang Salam merupakan salah satu bentuk kepedulian terhadap lingkungan dengan memanfaatkan bang sampah '
            },
    ]},
    {
        id : 3,
        kategori:'Pencairan Dana',
        subKategori:[{
            id : 1,
            pertanyaan: 'Apa itu Salam Coin pada aplikasi ?',
            jawaban: 'Bang Salam merupakan salah satu bentuk kepedulian terhadap lingkungan dengan memanfaatkan bang sampah '
        },{
            id : 2,
            pertanyaan: 'Bagaimana cara mencairkan dana?',
            jawaban: 'Bang Salam merupakan salah satu bentuk kepedulian terhadap lingkungan dengan memanfaatkan bang sampah '
        }
    ]},
    ]);
    const [currentPertanyaan, setCurrentPertanyaan] = useState(null);
    return(
        <View style={pusatBantuanStyle.container}>
            <View style={pusatBantuanStyle.content}>
                <ScrollView>
                    <View>
                        <View>
                            {
                            pertanyaan.map((item, index) => {
                                return(
                                    <View key={index}>
                                                <View style={{marginTop:'5%'}}>
                                                    <Text style={[textStyle.header,colorStyle.blackForFontAndAnything]}>{item.kategori}</Text>
                                                </View>
                                                <HorizontalLine />
                                                {
                                                item.subKategori.map((item, index) => {
                                                    return(
                                                        <View key={index} style={{flexGrow:1}}>
                                                            <TouchableOpacity style={[{marginVertical:10, flexGrow:1}]}
                                                            onPress={() => {
                                                                setCurrentPertanyaan(item);
                                                            }}
                                                            >
                                                                <Text style={[textStyle.faq,colorStyle.darkGreen]}>{item.pertanyaan}</Text>
                                                            </TouchableOpacity>
                                                            {
                                                                currentPertanyaan === item ?
                                                                <View>
                                                                    <View style= {{backgroundColor:'#D9D9D9', paddingVertical:0.5,marginVertical:20}}/>
                                                                    <Text style={[textStyle.faq,colorStyle.blackForFontAndAnything]}>{item.jawaban}</Text>
                                                                    <View style= {{backgroundColor:'#D9D9D9', paddingVertical:0.5,marginVertical:20}}/>
                                                                </View>
                                                                :
                                                                null
                                                            }
                                                        </View>
                                                    )    
                                                })}
                                    </View>
                                )
                            }
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default PusatBantuan;