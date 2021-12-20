import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from './Screens/SplashScreen'
import Dashboard from './Screens/Dashboard'
import { Chats } from './Screens/Chats'
import LoginScreen from './Screens/LoginScreen'
import Profile from './Screens/Profile'
import AllPatients from './Screens/ChatsUser'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigations/TabNavigator'
import OtpLogin from './Screens/OtpLogin';
import OtpInputScreen from './Screens/OtpInputScreen'
import SignUpScreen from './Screens/SignUpScreen'
import PatientSignIn from './Screens/Patients/PatientSignIn'
import PatientDashboard from './Screens/Patients/PatientDashboard'
import BookAppointment from './Screens/Patients/BookAppointment'
import AboutDoctor from './Screens/Patients/AboutDoctor'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuccessAppointment from './Screens/Patients/SuccessAppointment'
import AllDoctors from './Screens/Patients/AllDoctors'


import { Provider } from 'react-redux'
import { store } from './Redux/store'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <Provider store={store}>
 <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="AllDoctors" component={AllDoctors} />
        <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
        <Stack.Screen name="SuccessAppointment" component={SuccessAppointment} />
        <Stack.Screen name="OtpLogin" component={OtpLogin} />
        <Stack.Screen name="TabNavigatorS" component={TabNavigator} />
        <Stack.Screen name="OtpInputScreen" component={OtpInputScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ChatScreen" component={Chats} options={{headerShown:true}} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="AboutDoctor" component={AboutDoctor} />
        <Stack.Screen name="PatientSignIn" component={PatientSignIn} />
      </Stack.Navigator>
 </NavigationContainer>
 </Provider>

  
  )
}

export default App

const styles = StyleSheet.create({})
