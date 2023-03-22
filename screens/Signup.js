import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CONSTANT from '../Constants.config';
import CONSTANT2 from '../config/constants.config';
import Toast from 'react-native-toast-message';
import {showToast} from '../methods/methods';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignUp({navigation}) {
  const [model, setModel] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError(null);
    setIsLoading(true);
    console.log(model);
    if (!model.userName || !model.email || !model.password) {
      showToast('REQUIRED FIELDS ARE MISSING', 'error');
      setIsLoading(false);
    } else {
      axios
        .post(`${CONSTANT2.PROJECT_URL}/api/signup`, model)
        .then(res => {
          if (res.data.status) {
            console.log(res.data);
            setIsLoading(false);
            showToast('REGISTERED SUCCESSFULLY', 'success');
            setTimeout(() => {
              navigation.navigate('Login');
            }, 1000);
          } else {
            setIsLoading(false);
            showToast('SIGNUP FAILURE', 'error');
            setError(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
          showToast('SIGNUP FAILURE', 'error');
        });
    }
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
      }}>
      <Toast topOffset={true} position="top" visibilityTime={1000} />
      <View>
        <Text
          style={{
            color: '#0082E0',
            fontSize: 70,
            fontWeight: 'bold',
          }}>
          Signup
        </Text>

        <Text
          style={{
            color: '#0082E0',
            fontSize: 20,
            marginTop: 10,
          }}>
          Enter your credentials to register an account at SQuiP
        </Text>

        <View style={{marginTop: 40}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              fontSize: 20,
              opacity: 0.4,
              marginBottom: 5,
            }}>
            Username
          </Text>
          <View>
            <TextInput
              onChangeText={e => setModel({...model, userName: e})}
              style={{
                borderWidth: 2,
                borderColor: CONSTANT.INPUT_COLOR,
                borderRadius: 5,
                paddingLeft: 45,
                fontSize: 20,
                alignItems: 'center',
                position: 'relative',
                color: CONSTANT.THEME_LABEL_COLOR,
              }}
              placeholder="Username"
              keyboardType="default"
              placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            />
            <Icon
              style={{
                marginBottom: 10,
                marginRight: 10,
                position: 'absolute',
                top: 12,
                left: 20,
              }}
              name="account-outline"
              size={24}
              color={CONSTANT.THEME_LABEL_COLOR}
            />
          </View>
        </View>

        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              fontSize: 20,
              opacity: 0.4,
              marginBottom: 5,
            }}>
            Email
          </Text>
          <View>
            <TextInput
              onChangeText={e => setModel({...model, email: e.toLowerCase()})}
              style={{
                borderWidth: 2,
                borderColor: CONSTANT.INPUT_COLOR,
                borderRadius: 5,
                paddingLeft: 45,
                fontSize: 20,
                alignItems: 'center',
                position: 'relative',
                color: CONSTANT.THEME_LABEL_COLOR,
              }}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            />
            <Icon
              style={{
                marginBottom: 10,
                marginRight: 10,
                position: 'absolute',
                top: 12,
                left: 20,
              }}
              name="account-outline"
              size={24}
              color={CONSTANT.THEME_LABEL_COLOR}
            />
          </View>
        </View>

        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              fontSize: 20,
              opacity: 0.4,
              marginBottom: 5,
            }}>
            Password
          </Text>
          <View style={{marginBottom: 50}}>
            <TextInput
              onChangeText={e => setModel({...model, password: e})}
              style={{
                borderWidth: 2,
                borderColor: CONSTANT.INPUT_COLOR,
                borderRadius: 5,
                paddingLeft: 45,
                fontSize: 20,
                alignItems: 'center',
                position: 'relative',
                color: CONSTANT.THEME_LABEL_COLOR,
              }}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            />
            <Icon
              style={{
                marginBottom: 10,
                marginRight: 10,
                position: 'absolute',
                top: 12,
                left: 20,
              }}
              name="lock-outline"
              size={23}
              color={CONSTANT.THEME_LABEL_COLOR}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            disabled={isLoading}
            onPress={handleSubmit}
            style={{
              backgroundColor: '#0082E0',
              paddingVertical: 16,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_COLOR,
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {isLoading ? (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <ActivityIndicator size={25} color={CONSTANT.THEME_COLOR} />
                </View>
              ) : (
                'SIGN UP'
              )}
            </Text>
          </TouchableOpacity>

          {error ? (
            <View>
              <Text
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                {error.toUpperCase()}
              </Text>
            </View>
          ) : null}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          disabled={isLoading}
          style={{marginVertical: 10}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
