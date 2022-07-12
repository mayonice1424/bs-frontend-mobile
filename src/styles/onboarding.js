import {View, Text, StyleSheet, Colors} from 'react-native';

const Onboarding = StyleSheet.create({
    image: {
        marginTop: '25%',
        width: 300,
        height: 300,
    },
    caption:{
        marginTop: '10%',
        marginBottom:'2%',
        height: '15%',
        width: '91%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
    },
    circle : {
        width: 13,
        height: 13,
        borderRadius: 180 / 2,
        marginHorizontal : '1%',
    }, 
    circleContainer :{
        marginVertical: '5%',
        flexDirection: 'row',   
    },
    button:{
        height: '6%',
        width: '45%',
        justifyContent:'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        backgroundColor : "#0000",
        shadowRadius: 15 ,
        shadowOffset : { width: 56, height: 13},
    }
});

export default Onboarding;
