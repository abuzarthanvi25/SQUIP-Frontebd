import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import CONSTANT from '../Constants.config';
import CONSTANT2 from '../config/constants.config';
import {Modal, Portal, Provider} from 'react-native-paper';
import axios from 'axios';

function Police({navigation}) {
  const [lang, setlang] = useState('-345678');
  const [long, setlong] = useState('2345678');
  const [threat, setThreat] = useState('');
  const [confirmedThreat, setConfirmedThreat] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
  };

  Geolocation.getCurrentPosition(info => {
    console.log(info.coords);
    setlang(info.coords.latitude);
    setlong(info.coords.longitude);
  });

  useEffect(() => {
    setModel({
      ...model,
      location: {
        longitude: long,
        latitude: lang,
      },
      threat: confirmedThreat,
      category: 'police',
    });
  }, [confirmedThreat]);

  return (
    <Provider>
      <View>
        <View>
          <MapView
            provider={PROVIDER_GOOGLE}
            userInterfaceStyle="dark"
            style={{
              height: '55%',
              width: '100%',
            }}
            region={{
              latitude: lang,
              longitude: long,
              latitudeDelta: 0.009,
              longitudeDelta: 0.0009,
            }}>
            <Marker
              coordinate={{latitude: lang, longitude: long}}
              title="test description"
              pinColor="red"
              description="test description"></Marker>
          </MapView>
          <View
            style={{
              width: '100%',
              height: '45%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            {confirmedThreat !== '' ? (
              <View
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  padding: 20,
                }}>
                <Text style={{fontSize: 20, color: '#000'}}>
                  Threat Selected:{' '}
                  <Text style={{color: 'red', fontWeight: '600'}}>
                    {confirmedThreat}
                  </Text>
                </Text>
                <TextInput
                  onChangeText={e => setModel({...model, name: e})}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    paddingLeft: 20,
                    fontSize: 20,
                    color: '#414141',
                    borderWidth: 2,
                    borderColor: '#DCDCDC',
                    marginVertical: 5,
                  }}
                  placeholder="Name"
                  placeholderTextColor={'black'}
                />
                <TextInput
                  onChangeText={e => setModel({...model, contact: e})}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    paddingLeft: 20,
                    fontSize: 20,
                    color: '#414141',
                    borderWidth: 2,
                    borderColor: '#DCDCDC',
                    marginVertical: 5,
                  }}
                  placeholder="Contact"
                  placeholderTextColor={'black'}
                />
                <TouchableOpacity
                  disabled={
                    !model.name || !model.contact || !model.threat || loading
                  }
                  onPress={() => {
                    if (!model.name || !model.contact) {
                      ToastAndroid.show('REQUIRED FIELDS ARE MISSING');
                    } else {
                      setLoading(true);
                      axios
                        .post(`${CONSTANT2.PROJECT_URL}/api/complains`, model)
                        .then(res => {
                          setLoading(false);
                          console.log(res);
                          if (res.data.status) {
                            ToastAndroid.show(
                              res?.data.message?.toUpperCase(),
                              1000,
                            );
                          } else {
                            setError(err.message);
                            ToastAndroid.show('COMPLAIN FAILED TO SEND');
                          }
                        })
                        .catch(err => {
                          setLoading(false);
                          setError(err.message);
                          console.log(err);
                        });
                      console.log(model);
                    }
                  }}
                  style={{
                    paddingHorizontal: 40,
                    backgroundColor: '#0052CB',
                    paddingVertical: 10,
                    borderRadius: 20,
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 18,
                    }}>
                    {loading ? (
                      <ActivityIndicator size={20} color="#fff" />
                    ) : (
                      'Send Request'
                    )}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setConfirmedThreat('');
                      setThreat('');
                      setModel({});
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        textAlign: 'right',
                        fontSize: 16,
                      }}>
                      Change Complain
                    </Text>
                  </TouchableOpacity>
                  {error !== '' ? (
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'red',
                        fontWeight: 'bold',
                      }}>
                      ERROR: {error}
                    </Text>
                  ) : null}
                </View>
              </View>
            ) : null}
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              {confirmedThreat === '' ? (
                <>
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: 24,
                    }}>
                    Select Threat
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsModalOpen(!isModalOpen);
                      setThreat('Fight');
                    }}
                    style={{
                      backgroundColor: '#DCDCDC',
                      paddingHorizontal: 90,
                      paddingVertical: 12,
                      borderRadius: 30,
                      marginVertical: 10,
                      borderWidth: 1,
                      borderColor: CONSTANT.THEME_COLOR,
                    }}>
                    <Text
                      style={{
                        color: '#3C3C3C',
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      FIGHT
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setIsModalOpen(!isModalOpen);
                      setThreat('Robbery');
                    }}
                    style={{
                      backgroundColor: '#DCDCDC',
                      paddingHorizontal: 90,
                      paddingVertical: 12,
                      borderRadius: 30,
                      marginVertical: 10,
                      borderWidth: 1,
                      borderColor: CONSTANT.THEME_COLOR,
                    }}>
                    <Text
                      style={{
                        color: '#3C3C3C',
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      ROBBERY
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setIsModalOpen(!isModalOpen);
                      setThreat('Harrassment');
                    }}
                    style={{
                      backgroundColor: '#DCDCDC',
                      paddingHorizontal: 90,
                      paddingVertical: 12,
                      borderRadius: 30,
                      marginVertical: 10,
                      borderWidth: 1,
                      borderColor: CONSTANT.THEME_COLOR,
                    }}>
                    <Text
                      style={{
                        color: '#3C3C3C',
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      HARRASSMENT
                    </Text>
                  </TouchableOpacity>
                </>
              ) : null}
              <Portal>
                <Modal
                  style={{padding: 20}}
                  visible={isModalOpen}
                  onDismiss={() => {
                    setIsModalOpen(!isModalOpen);
                    setThreat('');
                  }}
                  contentContainerStyle={containerStyle}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 24,
                        marginBottom: 10,
                        fontWeight: 'bold',
                      }}>
                      Confirm Threat
                    </Text>
                    <Text style={{color: '#3C3C3C', fontSize: 22}}>
                      Are you sure you want to confirm{' '}
                      <Text style={{color: 'red', fontWeight: '500'}}>
                        {threat}
                      </Text>{' '}
                      as threat ?
                    </Text>

                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setIsModalOpen(!isModalOpen);
                          setThreat('');
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 20,
                            color: 'red',
                          }}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setIsModalOpen(!isModalOpen);
                          setConfirmedThreat(threat);
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 20,
                            color: '#0052CB',
                          }}>
                          Yes
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </Portal>
            </View>
          </View>
        </View>
      </View>
    </Provider>
  );
}

export default Police;
