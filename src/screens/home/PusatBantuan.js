import {View,Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import { Modal } from 'react-native';
import pusatBantuanStyle from '../../styles/pusatBantuan';
import colorStyle from '../../styles/colorStyle';
import GlobalIp from './Ip';


const PusatBantuan = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return(
        <View style={pusatBantuanStyle.container}>
            <View style={pusatBantuanStyle.content}>
                <ScrollView>
                    <View>
                        <TouchableOpacity>
                            <GlobalIp />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default PusatBantuan;