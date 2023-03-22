// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from '../screens/Login';
// import SignUp from '../screens/Signup';
// // import TabRoot from '../config/TabNavigationRoot';
// // import Header from '../components/Header';
// import SplashScreen from '../screens/SplashScreen';
// import {useSelector} from 'react-redux';

// const Stack = createNativeStackNavigator();

// export default function RootStack({navigation}) {
//   const authInfo = useSelector(state => state.auth);
//   return (
//     <>
//       <Stack.Navigator>
//         {!authInfo.user ? (
//           <Stack.Screen
//             name="Splash"
//             options={{headerShown: false}}
//             component={SplashScreen}
//           />
//         ) : null}
//         {!authInfo.user ? (
//           <Stack.Screen
//             name="Login"
//             options={{headerShown: false}}
//             component={Login}
//           />
//         ) : null}
//         {!authInfo.user ? (
//           <Stack.Screen
//             name="Signup"
//             options={{headerShown: false}}
//             component={SignUp}
//           />
//         ) : null}
//         {/* <Stack.Screen
//           name="Home Screen"
//           options={{
//             header: () => (
//               <View
//                 style={{
//                   padding: 20,
//                   backgroundColor: '#fff',
//                 }}>
//                 <Header onPressMenu={() => navigation.openDrawer()} />
//               </View>
//             ),
//           }}
//           component={TabRoot}
//         /> */}
//       </Stack.Navigator>
//     </>
//   );
// }
