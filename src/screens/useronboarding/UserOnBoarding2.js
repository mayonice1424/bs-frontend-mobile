import { Text, View,Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import homeLoginStyle from "../../styles/homeLogin";
import Onboarding from "../../styles/onboarding";
import colorStyle from "../../styles/colorStyle";
import textStyle from "../../styles/textStyle";


class UserOnBoarding2 extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    }
    render () {
return (
    <View style={homeLoginStyle.container}>
        <View>
            <Image style={Onboarding.image}
            source={require('../../images/Image/Onboarding2.png')} />
        </View>
        <View style={[Onboarding.caption,colorStyle.backgroundYellowDashboard]}>
            <Text style = {[textStyle.subtitle2,colorStyle.blackForFontAndAnything]}>Sampah dapat ditukarkan melalui bank sampah untuk menjadi koin yang akan tersimpan di akun kamu</Text>
        </View>
        <View style = {[Onboarding.circleContainer]}>
            <View style= {[colorStyle.borderColorGreenActive,Onboarding.circle]}></View>
            <View style= {[colorStyle.backgroundPrimerGreenActive,Onboarding.circle]}></View>
            <View style= {[colorStyle.borderColorGreenActive,Onboarding.circle]}></View>
        </View>
        <TouchableOpacity style = {[Onboarding.button,colorStyle.backgroundPrimerGreenActive]} onPress={() => this.props.navigation.navigate('HomeLogin')}><Text style={[textStyle.button,colorStyle.whiteForCard]}>Get Started</Text></TouchableOpacity>
    </View>
  )}
};
export default UserOnBoarding2;
