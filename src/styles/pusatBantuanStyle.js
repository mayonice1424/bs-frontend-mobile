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
      box:{
        width: '45%',
        padding: '8%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button:{
        padding:12,
        borderRadius: 10,
        marginTop: '5%',
        marginRight:10,
        backgroundColor: '#FCFFFC',
        borderColor: '#171717',
        shadowOpacity: 0.8,
        borderRadius: 10,
        elevation: 6,
        shadowRadius: 15 ,
      }
});

export default pusatBantuanStyle;