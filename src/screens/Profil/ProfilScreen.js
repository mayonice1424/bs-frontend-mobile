import {View,Image,Text, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import profilStyleScreen from '../../styles/profilStyle';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProfilScreen = () => {
    const [profil,setProfil] = useState(
        {
            name:'Rizky',
            username:'rizky@1301',
            foto: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            status:'Terverifikasi',
        });
    return(
        <View style={profilStyleScreen.container}>
            <View style={profilStyleScreen.content}>
                <View style ={profilStyleScreen.profilContainer}>
                    <View style = {[profilStyleScreen.imageContainer]}>
                        <Image style={profilStyleScreen.image} source= {profil.foto}/>
                    </View>
                    <View style={{marginLeft:'5%'}}>
                        <View>
                            <Text style={[colorStyle.blackForFontAndAnything,profilStyleScreen.name,textStyle.body2]}>{profil.name}</Text>
                            <Text style={[colorStyle.blackForFontAndAnything,profilStyleScreen.name,textStyle.body4]}>{profil.username}</Text>
                        </View>
                        <View style={[colorStyle.backgroundDarkGreen,profilStyleScreen.status]}>
                            <Text style={[colorStyle.whiteForCard,profilStyleScreen.name,textStyle.body1]}>{profil.status}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[colorStyle.backgroundPrimerGreenActive,profilStyleScreen.profilButton]}>
                    <View style={{flexDirection:'row'}}>
                        <MaterialIcons name="history" size={25} color={colorStyle.whiteForCard}/>
                        <Text style={[colorStyle.whiteForCard,profilStyleScreen.name,textStyle.body1,{marginLeft:20}]}>Riwayat Transaksi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[colorStyle.backgroundPrimerGreenActive,profilStyleScreen.profilButton]}>
                    <View style={{flexDirection:'row'}}>
                        <Feather name="edit" size={23} color={colorStyle.whiteForCard}/>
                        <Text style={[colorStyle.whiteForCard,profilStyleScreen.name,textStyle.body1,{marginLeft:20}]}>Edit Profil</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[colorStyle.backgroundPrimerGreenActive,profilStyleScreen.profilButton,]}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name="settings" size={25} color={colorStyle.whiteForCard}/>
                        <Text style={[colorStyle.whiteForCard,profilStyleScreen.name,textStyle.body1,{marginLeft:20}]}>Pengaturan</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[colorStyle.backgroundPrimerGreenActive,profilStyleScreen.profilButton]}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name="exit" size={25} color={colorStyle.whiteForCard}/>
                        <Text style={[colorStyle.whiteForCard,profilStyleScreen.name,textStyle.body1,{marginLeft:20}]}>Keluar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ProfilScreen;