import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { useEffect } from 'react'
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-220
  },
  Image:{
    height:150,
    width:150,
    borderRadius:80
  },
  content:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:"600",
    marginTop:15,
  },
  LogOut:{
    marginTop:-150,
    marginLeft:230,
    padding:12,
    backgroundColor:"lightgray",
    borderRadius:20
  }
})
const Profile = () => {
  const [name,setname]=useState("")
  const [phone,setPhone]=useState()
  const getName=async()=>{
   setname(await AsyncStorage.getItem("name"))
   setPhone(await AsyncStorage.getItem("phone"))
  }
  useEffect(()=>{
    getName()
  },[])
  const LogOut= async()=>{
    await AsyncStorage.removeItem("token")
  }
  return (
    <View style={styles.container}>
      <Text onPress={LogOut} style={styles.LogOut}>Log Out</Text>
      <Image
      source={{uri:"https://www.w3schools.com/howto/img_avatar.png"}}
      style={styles.Image}
      />
      <Text style={styles.content}>Name: {name}</Text>
      <Text style={styles.content}>Phone: {phone}</Text>
      <Text style={styles.content}>Balance:70 Taka</Text>


    </View>
  )
}

export default Profile

