import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectToken } from './feature/UserStore'
import HomeStackScreen from './StackScreen/HomeStackScreen'
import AuthenticationStack from './StackScreen/AuthenticationStack'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ScreenList = () => {
  const app=AsyncStorage.getItem("token")
  console.log(app)
  return (
    <View style={{flex:1}}>
      {
        app?
        <View style={{flex:1}}>
          <HomeStackScreen/>

        </View>
        :
        <View style={{flex:1}}>
          <AuthenticationStack/>
        </View>
      }
    </View>
  )
}

export default ScreenList

const styles = StyleSheet.create({})