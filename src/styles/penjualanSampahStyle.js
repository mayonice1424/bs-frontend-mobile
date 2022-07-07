import {View, Text, StyleSheet, Colors} from 'react-native';
import textStyle from './textStyle';
import colorStyle from './colorStyle';

const penjualanSampahStyle = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:"center",
        height: '100%',
        backgroundColor: '#FCFFFC',
        padding: 0,
    },
    content: {
        marginLeft: '4%',
        marginRight: '4%',
        height: '100%',
      },
      box:{
        width: '45%',
        padding: '10%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }
});

export default penjualanSampahStyle;