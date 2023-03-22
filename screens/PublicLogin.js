import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import CONSTANT from '../Constants.config';

export default function PublicLogin({navigation}) {
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
        uri: 'https://w0.peakpx.com/wallpaper/564/137/HD-wallpaper-cia-logo.jpg',
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
            onPress={() => navigation.navigate('Police')}
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
              POLICE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Ambulance')}
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
              AMBULANCE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Fire Brigade')}
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
              FIRE BRIGADE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
