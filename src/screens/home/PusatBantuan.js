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
                jawaban: 'Bang Salam adalah aplikasi berbasis android yang membantu masyarakat dalam menjual sampah anorganik kepada bank sampah. Sekaligus memberikan informasi terkait pengelolaan sampah kepada masyarakat.',
            },{
                id : 2,
                pertanyaan: 'Persyaratan Daftar Bang Salam ?',
                jawaban: 'Memiliki e-ktp, membuat akun Bang Salam, dan memiliki semangat untuk melakukan pemilahan sampah di rumah masing-masing.',
            },{
                id : 3,
                pertanyaan: 'Dimana letak Bang Salam ?',
                jawaban: 'Bang Salam, sementara ini bekerja sama dengan kelompok tani Agropreneur dan Pesantren yang ada di Desa Cintamulya.',
            },
            {
                id : 4,
                pertanyaan: 'Kenapa saya tidak bisa akses ?',
                jawaban: 'Beberapa fitur tidak dapat diakses oleh pengguna dikarenakan status verifikasi pada profil pengguna belum tervalidasi oleh admin.',
            },
        ]},
        {
            id : 2,
            kategori:'Penjualan Sampah',
            subKategori:[{
                id : 1,
                pertanyaan: 'Bagaimana Cara Menjual Sampah?',
                jawaban: 'Pilah sampah dari rumah masing-masing, bersihkan dan keringkan. Kemudian bawa sampah anorganik (misal kertas, plastik, logam, dll) ke lokasi penimbangan Bang Salam. Di lokasi penimbangan, akan dilakukan input data berat sampah dan kemudian akan dikonversi menjadi salam coin.',
            },{
                id : 2,
                pertanyaan: 'Apakah ada minimal berat atau pcs untuk menjual sampah?',
                jawaban: 'Untuk sementara tidak ada berat minimal dalam penjualan sampah.'
            },
    ]},
    {
        id : 3,
        kategori:'Pencairan Dana',
        subKategori:[{
            id : 1,
            pertanyaan: 'Apa itu Salam Coin pada aplikasi ?',
            jawaban: 'Salam coin adalah semacam mata uang yang berlaku di aplikasi Bang Salam. 1 Salam Coin bernilai sama dengan 1 Rupiah.',
        },{
            id : 2,
            pertanyaan: 'Bagaimana cara mencairkan dana?',
            jawaban: 'Informasi jadwal pencairan dana akan disampaikan melalui aplikasi. Salam coin yang bisa dicairkan adalah yang telah mencapai angka 10.000 Coin (10.000 rupiah) dan telah melakukan penjualan sampah ke bang salam selama lebih dari 1 bulan.',
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
                                                    <Text style={[textStyle.faqTitle,colorStyle.blackForFontAndAnything]}>{item.kategori}</Text>                                                    
                                                </View>
                                                {
                                                item.subKategori.map((item, index) => {
                                                    return(
                                                        <View key={index} style={{flexGrow:1}}>
                                                            <TouchableOpacity style={[{marginVertical:10, flexGrow:1}]}
                                                            onPress={() => {
                                                                setCurrentPertanyaan(item);
                                                            }}
                                                            >
                                                                <View style= {[
                                                                    currentPertanyaan === item ? colorStyle.backgroundDarkGreen : colorStyle.backgroundBlackForFontAndAnything,
                                                                    { paddingVertical:0.5, marginBottom:'3%' },
                                                                    ]}/>
                                                                <Text style={[
                                                                    currentPertanyaan === item ? colorStyle.primerGreenActive : colorStyle.blackForFontAndAnything
                                                                   ,{fontWeight:'700'},
                                                                   
                                                                   ]}>
                                                                {item.pertanyaan}</Text>

                                                            </TouchableOpacity>
                                                            {
                                                                currentPertanyaan === item ?
                                                                <View>
                                                                    <Text style={[textStyle.faq,colorStyle.blackForFontAndAnything,{fontWeight:'600'}]}>{item.jawaban}</Text>
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