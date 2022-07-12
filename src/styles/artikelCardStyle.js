import {StyleSheet} from 'react-native';

const artikelCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    width: '98%',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '5%',
    marginBottom: '2%',
    alignItems: 'center',
    backgroundColor: '#FCFFFC',
    borderColor: '#171717',
    shadowOpacity: 0.8,
    borderRadius: 10,
    elevation: 6,
    shadowRadius: 15,
  },
  image: {
    borderRadius: 10,
    marginVertical: '10%',
    marginHorizontal: '10%',
    height: '100%',
    width: '100%',
    marginBottom: '5%',
  },
  body: {
    height: '20%',
  },
  text: {
    alignItems: 'flex-start',
    marginBottom: '3%',
    marginLeft: '5%',
  },
});

export default artikelCardStyle;
