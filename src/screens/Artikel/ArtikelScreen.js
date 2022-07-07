import React,{useState} from 'react';
import {View, Text,Image, SafeAreaView,TouchableOpacity, ScrollView} from 'react-native';
import colorStyle from '../../styles/colorStyle';
import textStyle from '../../styles/textStyle';
import layoutStyle from '../../styles/layoutStyle';
import artikelStyle from '../../styles/artikelStyle';
import artikelCardStyle from '../../styles/artikelCardStyle';
const ArtikelScreen = ({ navigation}) => {
    const [artikel, setArtikel] = useState([
        {
          id: 1,
          thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
          title: 'Sampah Bekas',
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: '2020-01-01',
        },
        {
          id: 2,
          thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
          title: 'Sampah Bekas',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '2020-01-01',
        },
        {
          id: 3,
          thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
          title: 'Sampah Bekas',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '2020-01-01',
        },
        {
            id: 4,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            title: 'Sampah Bekas',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2020-01-01',
          },
          {
            id: 5,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            title: 'Sampah Bekas',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2020-01-01',
          },
          {
            id: 6,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            title: 'Sampah Bekas',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2020-01-01',
          },
          {
            id: 7,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            title: 'Sampah Bekas',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2020-01-01',
          },
          {
            id: 8,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            title: 'Sampah Bekas',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2020-01-01',
          },
          {
            id: 9,
            thumbnail: require('../.././images/Image/JenisSampah/BotolKaca.jpg'),
            title: 'Sampah Bekas',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2020-01-01',
          },
      ]);
  return (
      <View style={artikelStyle.container}>
        <View style={artikelStyle.content}>
        <ScrollView>
            <View style={artikelCardStyle.body}>
            {artikel.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={[artikelCardStyle.container]}
                onPress={() => navigation.navigate('DetailArtikelScreen',{data:item})}
                >
                    <View style ={{justifyContent:'center',width:'100%'}}>
                    <View style = {{alignItems: 'center',justifyContent:'center'}}>
                        <Image source={item.thumbnail} style={artikelCardStyle.image} />
                    </View>
                    <View style={[artikelCardStyle.text,]}>
                        <Text style={[artikelCardStyle.title,colorStyle.blackForFontAndAnything,textStyle.titleItem]}>{item.title}</Text>
                        <Text style={[artikelCardStyle.title,colorStyle.blackForFontAndAnything,textStyle.date]}>{item.date}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        </View>
    </View>
  );
};

export default ArtikelScreen;
