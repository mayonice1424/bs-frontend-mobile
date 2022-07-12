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
    margintoTop: '5%',
    width: '80%',
    height: '80%',
  },
  imageContainer: {
    marginVertical: '5%',
    borderRadius: 10,
    borderColor: '#171717',
    width: '98%',
    marginHorizontal: '1%',
    backgroundColor: '#00000000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFFFC',
    borderColor: '#171717',
    shadowOpacity: 0.8,
    borderRadius: 10,
    elevation: 6,
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
