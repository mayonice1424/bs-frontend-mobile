import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import colorStyle from '../styles/colorStyle'
import splashScreenStyle from '../styles/splashScreenStyle'
import { StackActions } from '@react-navigation/native'
export default class SplashScreen extends Component {
  componentDidMount(navigation) { 
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('LoginRoutes'))
    }, 2000)
  }
  render() {
    return (
      <View style={splashScreenStyle.container}>
          <View>
            <Image source={
              require('../../src//images//Image/Logo.png')
            }/>
          </View>
      </View>
    )
  }
}