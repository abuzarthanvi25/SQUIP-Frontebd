import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CONSTANT from '../Constants.config';

export default function Header({onPressMenu, onPressNotification}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image source={require('../assets/logoSmall.png')} />
          <Image
            style={{marginLeft: 30}}
            source={require('../assets/plantifySmall.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={onPressNotification ?? null}
            style={{marginHorizontal: 10}}>
            <Icon
              name={'notifications-none'}
              size={26}
              color={CONSTANT.MAIN_TEXT_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressMenu ?? null}
            style={{marginHorizontal: 10}}>
            <Icon name={'menu'} size={28} color={CONSTANT.MAIN_TEXT_COLOR} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
