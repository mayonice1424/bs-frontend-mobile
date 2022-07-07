
import React,{useState} from 'react';
import {View, Text,Image, SafeAreaView,TouchableOpacity, ScrollView} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import layoutStyle from '../../styles/layoutStyle';
import kerajinanStyle from '../../styles/kerajinanStyle';
import Kerajinan from '../routes/KerajinanRoutes';
import cardStyle from '../../styles/cardStyle';
const KerajinanScreen = ({navigation}) => {
    const [kerajinan, setKerajinan] = useState([
        {
            id: 1,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            namaBarang: 'Vas Bunga',
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            harga :2000,
            stok: 200,
            panjang:200,
            lebar:200,
        },
        {
            id: 2,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            namaBarang: 'Vas Bunga',
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            harga :2000,
            stok: 200,
            panjang:200,
            lebar:200,
          },
          {
            id: 3,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            namaBarang: 'Vas Bunga',
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            harga :2000,
            stok: 200,
            panjang:200,
            lebar:200,
          },
          {
            id: 4,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            namaBarang: 'Vas Bunga',
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            harga :2000,
            stok: 200,
            panjang:200,
            lebar:200,
          },
          {
            id: 5,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            namaBarang: 'Vas Bunga',
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            harga :2000,
            stok: 200,
            panjang:200,
            lebar:200,
          },
    ]);
    return(
    <View style={kerajinanStyle.container}>
        <View style={kerajinanStyle.content}>
            <ScrollView>
                 <View style={cardStyle.body}>
                    {kerajinan.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={cardStyle.container}
                        >
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
                                        {item.namaBarang}
                                    </Text>
                                    <Text style={[textStyle.body1, colorStyle.darkGreen]}>
                                        <Text>Rp. </Text>{item.harga}
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
            </ScrollView>
        </View>
   </View>
   )
};

export default KerajinanScreen;
