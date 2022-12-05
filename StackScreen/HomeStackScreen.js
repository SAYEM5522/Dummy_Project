import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusRute from '../components/BusRute';
import Scanner from '../components/Scanner';
import { NavigationContainer } from '@react-navigation/native';
import Screen from '../components/Screen';
import BusList from '../components/BusList';
import QRCodeInformation from '../components/QRCodeInformation';
import { Provider } from 'react-redux';
import store from '../app/store';
const HomeStackScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Screen' >

     <Stack.Screen name="Screen" component={Screen} options={{headerShown:false}} />
    <Stack.Screen name="BusRute" component={BusRute} />
    <Stack.Screen name="BusList" component={BusList} />
    <Stack.Screen name="Scanner" component={Scanner} />
    <Stack.Screen name="QRCodeInformation" component={QRCodeInformation} />

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStackScreen

const styles = StyleSheet.create({})