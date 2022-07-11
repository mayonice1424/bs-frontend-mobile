import {StyleSheet} from 'react-native';

const cardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    width: '98%',
    height: '100%',
    marginTop: '3%',
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: '3%',
    alignItems:'center',
    backgroundColor: '#FCFFFC',
    borderColor: '#171717',
    shadowOpacity: 0.8,
    borderRadius: 10,
    elevation: 6,
    shadowRadius: 15 ,
  },
  image:{
    borderRadius: 10,
    marginVertical: '3%',
    marginHorizontal: '2%',
    width: 140,
    height: 120,
  },
  body:{
    height:"20%",
  }
});

export default cardStyle;
