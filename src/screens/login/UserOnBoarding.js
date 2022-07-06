import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppIntroSlider from 'react-native-app-intro-slider';
import homeLoginStyle from '../../styles/homeLogin';
import Onboarding from '../../styles/onboarding';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';

const slides = [
  {
    key: 1,
    text: 'Mulai kebiasaan untuk membuang dan memilah sampah anorganik pada tempatnya',
    image: require('.././../images/./Image/Onboarding1.png'),
  },
  {
    key: 2,
    text: 'Sampah dapat ditukarkan melalui bank sampah untuk menjadi koin yang akan tersimpan di akun kamu',
    image: require('.././../images/./Image/Onboarding2.png'),
  },
  {
    key: 3,
    text: 'Koin tersebut dapat ditukarkan menjadi uang rupiah',
    image: require('.././../images/./Image/Onboarding3.png'),
  },
];

export default class UserOnBoarding extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({item}) => {
    return (
      <View style={homeLoginStyle.container}>
        <Image style={Onboarding.image} source={item.image} />
        <View
          style={[Onboarding.caption, colorStyle.backgroundYellowDashboard]}>
          <Text
            style={[textStyle.subtitle2, colorStyle.blackForFontAndAnything]}>
            {item.text}
          </Text>
        </View>
        <View style={[Onboarding.circleContainer]}></View>
        <TouchableOpacity
          style={[Onboarding.button, colorStyle.backgroundPrimerGreenActive]}
          onPress={() => this.props.navigation.navigate('UserDashboard')}>
          <Text style={[textStyle.button, colorStyle.whiteForCard]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
  };
  render() {
    if (this.state.showRealApp) {
      return <UserOnBoarding />;
    } else {
      const {navigate} = this.props.navigation;
      try {
        AsyncStorage.getItem('token').then(value => {
          if (value != null) {
            navigate('TabNavigator');
          }
        });
      } catch (error) {
        console.log(error);
      }
      return (
        <AppIntroSlider
          activeDotStyle={[
            colorStyle.backgroundPrimerGreenActive,
            Onboarding.circle,
          ]}
          dotStyle={[colorStyle.borderColorGreenActive, Onboarding.circle]}
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}
