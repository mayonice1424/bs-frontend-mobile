import {StyleSheet} from 'react-native';

const detailKerajinanStyle = StyleSheet.create({
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
    width: '90%',
    height: 200 ,
  },
  imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: '5%',
      marginBottom: '5%',
      backgroundColor: '#FCFFFC',
      borderColor: '#171717',
      shadowOpacity: 0.8,
      borderRadius: 20,
      elevation: 6,
      marginTop: '5%',
      marginHorizontal: '2%',
      shadowRadius: 15,
  },
  date: {
    marginVertical: '3%',
  },
  text: {
    textAlign: 'justify',
    lineHeight: 21,
  },
  detailProductSpacing: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default detailKerajinanStyle;
