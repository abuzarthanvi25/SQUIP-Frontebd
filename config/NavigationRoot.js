import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserSelection from '../screens/UserSelection';
import ChildProtection from '../screens/ChildProtection';
import SignUp from '../screens/Signup';
import Login from '../screens/Login';
import PublicLogin from '../screens/PublicLogin';
import Police from '../screens/Police';
import Ambulance from '../screens/Ambulance';
import FireBrigade from '../screens/FireBrigade';
import AdminHome from '../screens/AdminHome';
import {useSelector} from 'react-redux';
import AdminPolice from '../screens/AdminPolice';
import AdminAmbulance from '../screens/AdminAmbulance';
import AdminFireBrigade from '../screens/AdminFireBrigade';

const Stack = createNativeStackNavigator();

function NavigationRoot() {
  const adminCredentials = useSelector(state => state.auth);
  console.log(adminCredentials);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="User Selection"
          options={{headerShown: false}}
          component={UserSelection}
        />
        <Stack.Screen
          name="Child Protection"
          options={{headerShown: false}}
          component={ChildProtection}
        />
        {/* 3 options */}
        <Stack.Screen
          name="Public Login"
          options={{headerShown: false}}
          component={PublicLogin}
        />
        <Stack.Screen
          name="Police"
          options={{headerShown: false}}
          component={Police}
        />
        <Stack.Screen
          name="Ambulance"
          options={{headerShown: false}}
          component={Ambulance}
        />
        <Stack.Screen
          name="Fire Brigade"
          options={{headerShown: false}}
          component={FireBrigade}
        />
        {/* login as admin email/pwd auth */}
        <Stack.Screen
          name="Signup"
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Admin Home"
          options={{headerShown: false}}
          component={AdminHome}
        />
        <Stack.Screen
          name="Admin Police"
          options={{headerShown: false}}
          component={AdminPolice}
        />
        <Stack.Screen
          name="Admin Ambulance"
          options={{headerShown: false}}
          component={AdminAmbulance}
        />
        <Stack.Screen
          name="Admin Firebrigade"
          options={{headerShown: false}}
          component={AdminFireBrigade}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRoot;
