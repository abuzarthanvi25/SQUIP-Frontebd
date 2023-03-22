import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

export default function ChildProtection({navigation}) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#C4C4C4'}}>
      <View style={{flex: 1, padding: 20, marginTop: 20}}>
        <Text
          style={{
            color: '#5D5D5D',
            textAlign: 'center',
            fontSize: 20,
            marginVertical: 40,
          }}>
          Enter your pin to access SQUIP
        </Text>
        <TextInput
          onChangeText={e => {
            if (e === '1234') {
              navigation.navigate('Public Login');
            }
          }}
          maxLength={4}
          style={{
            backgroundColor: '#B3B1B1',
            borderRadius: 20,
            textAlign: 'center',
            fontSize: 30,
            color: '#414141',
          }}
          secureTextEntry={true}
          keyboardType="numeric"
          placeholder="PIN"
          placeholderTextColor={'#5D5D5D'}
        />
      </View>
    </ScrollView>
  );
}
