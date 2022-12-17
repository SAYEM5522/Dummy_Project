import { Dimensions, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setToken } from '../feature/UserStore'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  inner: {
    paddingVertical:10 ,
    // flex: 1,
    display: 'flex',
    justifyContent:'center',
  },
  textInput: {
    height: 50,
    borderColor: '#000000',
    width:width-100,
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal:10,
    position:'relative',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Caption:{
    fontSize:20,
    fontWeight:"700",
    fontStyle:"italic",
    marginTop:-20
  }
})
const SignUp = () => {
  const [name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [passward, setPassward] = useState('');
  const dispatch=useDispatch()

  const navigation=useNavigation()
  const  headers={
        'Accept': 'application/json',
        // 'Content-Type': 'multipart/form-data'
    }

  const Submit=async()=>{
    try {
      const res = await axios.post(`http://192.168.0.102:5001/user`,{name:name,phone:Phone,passward:passward})
     await AsyncStorage.setItem("token",res.data.token)
     await AsyncStorage.setItem("name",res.data.name)
     await AsyncStorage.setItem("phone",res.data.phone)
    } catch(err) {
      console.log(err.message);
    }
  }
  const Goto=useCallback(()=>{
     navigation.navigate("SignIn")
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.Caption}>Eticket</Text>

    <Pressable onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
      <View style={{paddingBottom:15}}>
      <Text> Username </Text>
    <TextInput placeholder='UserName...' 
    onChangeText={(text)=>setName(text)}
    style={styles.textInput} />
      </View>
  <View>
        </View>
    <View style={{paddingTop:15}}>
    <Text> Phone Number </Text>
    <TextInput 
      onChangeText={(text)=>setPhone(text)}
      placeholder='Phone Number...'
       style={styles.textInput} />
         <Text style={{marginTop:20}}>Passward </Text>
    <TextInput 
      onChangeText={(text)=>setPassward(text)}
      placeholder='Passward...'
      secureTextEntry={true}
       style={styles.textInput} />
    </View>
    <TouchableOpacity onPress={Submit}>
    <Text style={{alignSelf:"center",marginTop:15,borderWidth:1,paddingHorizontal:20,borderRadius:8,paddingVertical:9}} >Submit</Text>
    </TouchableOpacity>
    </View>

    </Pressable>
    <View style={{display:"flex",alignItems:"center",flexDirection:"row",alignSelf:"center"}}>
      <Text style={{alignSelf:"center"}}>Already have an account</Text> 
      <Text onPress={Goto} style={{marginLeft:10,fontWeight:"800"}}>Sign In</Text>
      </View>
    </View>
  )
}

export default SignUp

