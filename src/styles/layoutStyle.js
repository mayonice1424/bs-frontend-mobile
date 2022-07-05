import {View, Text, StyleSheet, Colors} from 'react-native';
import colorStyle from './colorStyle';

const layoutStyle = StyleSheet.create({
  container: {
    // alignItems:"center",
    flex: 1,
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
    flex: 9,
    marginLeft: '4%',
    marginRight: '4%',
  },
  touchable: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
  },
});

export default layoutStyle;
