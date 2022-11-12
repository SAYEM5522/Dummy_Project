import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { NavigationContainer } from '@react-navigation/native';

const AuthenticationStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SignUp' >
    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
    <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenticationStack

const styles = StyleSheet.create({})