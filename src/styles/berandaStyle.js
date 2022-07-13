import {StyleSheet} from 'react-native';

const berandaStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: '#FCFFFC',
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 10,
    marginLeft: '3%',
    marginRight: '2%',
  },
  content: {
    paddingBottom: 80,
    marginLeft: '4%',
    marginRight: '4%',
    height: '100%',
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
  },
  linearGradient: {
    width: '100%',
    height: 90,
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
    paddingRight: '5%',
    maxWidth: '40%',
  },
  wrap: {
    marginTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    minHeight: 90,
    height: '12%',
    flexDirection: 'row',
    marginBottom: '1%',
    marginTop: '3%',
  },
  boxContent: {
    flexDirection: 'row',
    width: '70%',
    marginTop: 11,
  },
  emptyAnnouncementView: {
    height: '20%',
  },
});

export default berandaStyle;
