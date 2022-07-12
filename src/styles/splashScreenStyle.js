import {View, Text, StyleSheet, Colors} from 'react-native';
import textStyle from './textStyle';
import colorStyle from './colorStyle';

const splashScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:"center",
        height: '100%',
        backgroundColor: '#FCFFFC',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    content: {
        paddingBottom:80,
        marginLeft: '4%',
        marginRight: '4%',
        height: '100%',
      },
      logo:{
        alignItems : 'center'
      }
});

export default splashScreenStyle;