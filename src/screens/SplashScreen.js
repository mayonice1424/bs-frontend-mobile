import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import colorStyle from '../styles/colorStyle'
import splashScreenStyle from '../styles/splashScreenStyle'
import { StackActions } from '@react-navigation/native'
export default class SplashScreen extends Component {
  componentDidMount(navigation) { 
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('LoginRoutes'))
    }, 1500)
  }
  render() {
    return (
      <View style={splashScreenStyle.container}>
          <View style = {splashScreenStyle.logo}>
            <Image
            style={{width: 240, height: 280}}
            source={
              require('../../src//images//Image/LogoSplashscreen.png')
            }/>
          </View>
      </View>
    )
  }
}