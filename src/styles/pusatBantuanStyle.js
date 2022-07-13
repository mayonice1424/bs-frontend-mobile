import {View, Text, StyleSheet, Colors} from 'react-native';
import textStyle from './textStyle';
import colorStyle from './colorStyle';

const pusatBantuanStyle = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:"center",
        height: '100%',
        backgroundColor: '#FCFFFC',
        padding: 0,
    },
    content: {
        paddingBottom:80,
        marginLeft: '4%',
        marginRight: '4%',
        height: '100%',
      },
      cardContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
});

export default pusatBantuanStyle;