import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectToken } from './feature/UserStore'
import HomeStackScreen from './StackScreen/HomeStackScreen'
import AuthenticationStack from './StackScreen/AuthenticationStack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { useState } from 'react'

const ScreenList = () => {
  const [token,setToken]=useState(false)
  const getToken=async()=>{
  const t=await AsyncStorage.getItem("token")
  if(t){
    setToken(true)
  }else{
    setToken(false)
  }
  }
  useEffect(()=>{
  getToken()
  },[token])
  
  return (
    <View style={{flex:1}}>
      {
        token?
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