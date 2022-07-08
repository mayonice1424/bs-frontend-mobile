import {View,Text} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import React from 'react';
import profilStyleScreen from '../../styles/profilStyle';
const ProfilScreen = () => {
    return(
        <View style={profilStyleScreen.container}>
            <View style={profilStyleScreen.content}>
                <Text style={colorStyle.blackForFontAndAnything}>Profil</Text>
            </View>
        </View>
    )
}
export default ProfilScreen;