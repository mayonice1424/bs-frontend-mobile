import {View, Text, StyleSheet, Colors} from 'react-native';
import colorStyle from './colorStyle';

const layoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:"center",
    height: '100%',
    backgroundColor: '#FCFFFC',
    padding: 0,
  },
  box: {
    width: '100%',
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginRight: 24,
  },
  header: {
    flex: 1,
  },
  content: {
    // paddingBottom: '40%',
    marginLeft: '4%',
    marginRight: '4%',
    height: '100%',
  },
  touchable: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
  },
});

export default layoutStyle;
