import {View,Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import { Modal } from 'react-native';
import colorStyle from '../../styles/colorStyle';
const PusatBantuan = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return(
        <View style={pusatBantuanStyle.container}>
            <View style={pusatBantuanStyle.content}>
                <ScrollView>
                    <View>
                        <TouchableOpacity>
                            <Text style={colorStyle.blackForFontAndAnything}>Pusat Bantuan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default PusatBantuan;