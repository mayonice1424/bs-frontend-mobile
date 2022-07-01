import {View, Text, StyleSheet, Colors} from 'react-native';

const layoutStyle = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default layoutStyle;
