import {View, Text, StyleSheet, Colors} from 'react-native';

const homeLoginStyle = StyleSheet.create({
  container: {
    alignItems:"center",
    flex: 1,
    backgroundColor: '#FCFFFC',
    padding: 0,
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 9,
    marginLeft: '4%',
    marginRight: '4%',
  },
  logoHeader : {
    flexDirection:"row",
    width: '100%',
    justifyContent:'center',
    paddingTop: "10%",
    paddingBottom: '20%'
  },
  logo :{
    padding: "5%",
    width: '100%',
    alignItems : 'center'
  },
button : {
    marginTop : '6%',
    height: '15%',
    width: 280, 
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    borderColor: '#171717',
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor : "#0000",
    shadowRadius: 15 ,
    shadowOffset : { width: 56, height: 13},
},
text : {
  textAlign:"center",
},
halfCircle:{
    paddingTop: "15%",
    height: '50%',
    marginTop: '-20%',
    justifyContent: 'center',
}

});

export default homeLoginStyle;
