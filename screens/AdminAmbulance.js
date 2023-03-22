import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CONSTANT from '../config/constants.config';

export default function AdminAmbulance({navigation}) {
  const [ambulanceRequests, setAmbulanceRequests] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRequests = () => {
    setLoading(true);
    axios
      .post(`${CONSTANT.PROJECT_URL}/api/category/complains`, {
        category: 'ambulance',
      })
      .then(res => {
        console.log(res.data.complains);
        setAmbulanceRequests(res.data.complains);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleAccept = id => {
    setLoading(true);
    axios
      .patch(`${CONSTANT.PROJECT_URL}/api/complains/${id}`, {
        is_accepted: true,
      })
      .then(res => {
        setRefresh(!refresh);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleResolve = id => {
    setLoading(true);
    axios
      .delete(`${CONSTANT.PROJECT_URL}/api/complains/${id}`)
      .then(res => {
        setRefresh(!refresh);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getRequests();
  }, [refresh]);

  return (
    <>
      <ImageBackground
        imageStyle={{opacity: 0.8}}
        source={{
          uri: 'https://i.pinimg.com/736x/e0/3d/38/e03d38296e99765382fad5d407e47c87.jpg',
        }}
        style={{flex: 1, padding: 25}}>
        <View style={{marginVertical: 20}}>
          <Text
            style={{
              fontSize: 40,
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            AMBULANCE REQUESTS
          </Text>
        </View>
        <ScrollView style={{flex: 1}}>
          {loading ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size={50} color="#fff" />
            </View>
          ) : (
            <View>
              {ambulanceRequests && ambulanceRequests.length > 0 ? (
                ambulanceRequests.map((request, i) => (
                  <View key={i} style={{padding: 11}}>
                    <View
                      style={{
                        padding: 25,
                        marginTop: 10,
                        backgroundColor: '#E1E1E1',
                        borderRadius: 15,
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,

                        elevation: 4,
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'black', fontSize: 20, flex: 1}}>
                          Threat
                        </Text>
                        <Text
                          style={{
                            color: '#C60E00',
                            fontSize: 20,
                            fontWeight: 'bold',
                          }}>
                          {request.threat}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'black', fontSize: 20, flex: 1}}>
                          Name
                        </Text>
                        <Text style={{color: '#003777', fontSize: 18}}>
                          {request.name}
                        </Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'black', fontSize: 20, flex: 1}}>
                          Contact
                        </Text>
                        <Text style={{color: '#003777', fontSize: 18}}>
                          {request.contact}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{color: '#000', fontSize: 20}}>
                          ACCEPTED
                        </Text>
                        {request.is_accepted ? (
                          <View
                            style={{
                              paddingHorizontal: 20,
                              backgroundColor: 'green',
                              justifyContent: 'center',
                              borderRadius: 20,
                            }}>
                            <Text>
                              {request.is_accepted.toString().toUpperCase()}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={{
                              paddingHorizontal: 20,
                              backgroundColor: 'red',
                              borderRadius: 20,
                              justifyContent: 'center',
                            }}>
                            <Text>
                              {request.is_accepted.toString().toUpperCase()}
                            </Text>
                          </View>
                        )}
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 10,
                        }}>
                        {request.is_accepted ? null : (
                          <TouchableOpacity
                            onPress={() => handleAccept(request._id)}
                            style={{
                              paddingHorizontal: 15,
                              paddingVertical: 5,
                              backgroundColor: '#007747',
                              borderRadius: 10,
                            }}>
                            <Text>ACCEPT</Text>
                          </TouchableOpacity>
                        )}
                        <TouchableOpacity
                          onPress={() => handleResolve(request._id)}
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                            backgroundColor: '#005680',
                            borderRadius: 10,
                          }}>
                          <Text>RESOLVE</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'black'}}>No Complains</Text>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </>
  );
}
