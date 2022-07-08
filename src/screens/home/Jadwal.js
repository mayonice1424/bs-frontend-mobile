import { View,Text, ScrollView } from "react-native";
import React from "react";
import jadwalStyle from "../../styles/jadwalStyle";
import colorStyle from "../../styles/colorStyle";
import textStyle from "../../styles/textStyle";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import berandaStyle from "../../styles/berandaStyle";

const Jadwal = () => {
  return (
    <View style ={jadwalStyle.container}>
      <View style = {jadwalStyle.content}>
        <View>
          <LinearGradient
                  start={{x: 0.91, y: 0}}
                  end={{x: 0.91, y: 1.12}}
                  colors={['#63E798', '#3CCA75']}
                  style={[jadwalStyle.linearGradient,jadwalStyle.boxSchedule]}>
            <Text style = {[colorStyle.whiteForCard,textStyle.subtitle2]}>Tanggal dan Waktu Pencairan</Text>
          </LinearGradient>
          <View style={jadwalStyle.jadwalCard}>
            <View style={[jadwalStyle.circle,colorStyle.backgroundDarkGreen]}>
              <Text style = {[colorStyle.whiteForCard,textStyle.judul]}>01-07</Text>
            </View>
            <View>
              <Text style = {[colorStyle.blackForFontAndAnything,textStyle.subtitle2]}>Setiap Awal Bulan</Text>
            </View>
          </View>
          <LinearGradient
                  start={{x: 0.91, y: 0}}
                  end={{x: 0.91, y: 1.12}}
                  colors={['#63E798', '#3CCA75']}
                  style={[jadwalStyle.linearGradient,jadwalStyle.boxSchedule]}>
            <Text style = {[colorStyle.whiteForCard,textStyle.subtitle2]}>Tanggal dan Waktu Pencairan</Text>
          </LinearGradient>
            <View style={[jadwalStyle.jadwalCardDetail]}>
              <View style={{flexDirection:'row'}}>
              <Ionicons
                  name="calendar"
                  size={25}
                  style={colorStyle.primerGreenActive}
                />
              <View style={{marginHorizontal:10}}>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>     Senin      </Text>
              </View>
              <View>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>08.00-16.00</Text>
              </View>
              </View>
              <View style={{flexDirection:'row'}}>
              <Ionicons
                  name="calendar"
                  size={25}
                  style={colorStyle.primerGreenActive}
                />
              <View style={{marginHorizontal:10}}>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>     Selasa    </Text>
              </View>
              <View>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>08.00-16.00</Text>
              </View>
              </View>
              <View style={{flexDirection:'row'}}>
              <Ionicons
                  name="calendar"
                  size={25}
                  style={colorStyle.primerGreenActive}
                />
              <View style={{marginHorizontal:10}}>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>      Rabu      </Text>
              </View>
              <View>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>08.00-16.00</Text>
              </View>
              </View>
              <View style={{flexDirection:'row'}}>
              <Ionicons
                  name="calendar"
                  size={25}
                  style={colorStyle.primerGreenActive}
                />
              <View style={{marginHorizontal:10}}>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>     Kamis     </Text>
              </View>
              <View>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>08.00-16.00</Text>
              </View>
              </View>
              <View style={{flexDirection:'row'}}>
              <Ionicons
                  name="calendar"
                  size={25}
                  style={colorStyle.primerGreenActive}
                />
              <View style={{marginHorizontal:10}}>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>      Jumat    </Text>
              </View>
              <View>
                <Text style = {[colorStyle.blackForFontAndAnything,textStyle.innerTeks]}>08.00-16.00</Text>
              </View>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
}
export default Jadwal;