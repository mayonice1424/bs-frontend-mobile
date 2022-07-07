import {StyleSheet} from 'react-native';

const berandaStyle = StyleSheet.create({
  container: {
    padding: 0,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 10,
    marginLeft: '3%',
    marginRight: '2%',
  },
  content: {
    paddingBottom: '40%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  artikelLayout: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '5%',
  },
  profile: {
    marginTop: '10%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textProfile: {
    marginTop: '2.5%',
  },
  userInfo: {
    borderRadius: 10,
    marginTop: '5%',
    width: '100%',
    borderRadius: 10,
  },
  linearGradient: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  imageCoin: {
    width: 24,
    height: 24,
    marginRight: '5%',
  },
  viewSaldo: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '25%',
  },
  leftWrap: {
    width: '50%',
    flexDirection: 'column',
  },
  rightWrap: {
    width: '50%',
  },
  wrap: {
    marginTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
  },
  viewNoRek: {
    marginLeft: '5%',
  },
  containerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '49%',
    marginRight: '2%',
    borderRadius: 10,
  },
  boxRow: {
    height: '13%',
    flexDirection: 'row',
    marginBottom: '1%',
    marginTop: '3%',
  },
  boxContent: {
    flexDirection: 'row',
    width: '70%',
    marginTop: 11,
  },
});

export default berandaStyle;
