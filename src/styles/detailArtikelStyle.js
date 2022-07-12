import {StyleSheet} from 'react-native';

const detailArtikelStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFFC',
    padding: 0,
    margin: 0,
  },
  content: {
    paddingBottom: 80,
    marginLeft: '4%',
    marginRight: '4%',
  },
  image: {
   
  },
  imageContainer: {
      width: '98%',
      height: 200 ,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '5%',
      shadowOpacity: 0.8,
      borderRadius: 20,
      elevation: 6,
      marginTop: '5%',
      shadowRadius: 15,
      marginHorizontal: '1%',
  },
  date: {
    marginVertical: '3%',
  },
  text: {
    textAlign: 'justify',
    lineHeight: 21,
  },
});
export default detailArtikelStyle;
