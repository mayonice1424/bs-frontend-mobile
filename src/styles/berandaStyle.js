import {StyleSheet} from 'react-native';

const berandaStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  image: {
    width: 68,
    height:68,
    borderRadius:10,
    marginLeft: '3%',
    marginRight: '2%'
  },
  box:{
    marginTop: '10%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems:'flex-start',
  },
  textBox :{
    marginTop: '2.5%',
  },
  textBOX :{
    borderRadius: 10,
    marginTop: '5%',
    width: '100%',
    height : '15%',
    borderRadius: 10,
  },
  linearGradient: {
    width: '100%',
    height: 120,
    borderRadius:10,
  },
  imageCoin: {
    width: 24,
    height: 24,
    marginRight: '15%',
  },
  viewSaldo: {
    flexDirection: 'row',
    width: '60%',
  },
  leftWrap:{
    width: '50%',
    flexDirection: 'column',
  },
  rightWrap:{
    width: '50%',
  },
  wrap:{
    marginTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
  },
  viewNoRek:{
    marginLeft: '5%',
  },
  containerBox:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    marginRight: '2%',
    height: '100%',
    borderRadius: 10,
  },  
  box1:{
    height:'23%',
    marginTop: '5%',
    flexDirection: 'row',
  },
  box2:{
    marginTop: '5%',
    marginBottom: '3%',
    height:'23%',
    flexDirection: 'row',
  }, 
});

export default berandaStyle;
