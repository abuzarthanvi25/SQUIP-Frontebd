import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import CONSTANT from '../Constants.config';

export default function UserSelection({navigation}) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri: 'https://i.pinimg.com/736x/7d/54/96/7d54969b1946442be29904732e7b1ee9.jpg',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // flex: 1,
          // backgroundColor: CONSTANT.THEME_TEXT,
        }}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Child Protection')}
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 100,
              paddingVertical: 15,
              borderRadius: 30,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: CONSTANT.THEME_TEXT,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              USER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 100,
              paddingVertical: 15,
              borderRadius: 30,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: CONSTANT.THEME_TEXT,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              ADMIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
