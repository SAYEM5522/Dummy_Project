import { Dimensions, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import axios from 'axios'
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
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Caption:{
    fontSize:20,
    fontWeight:"700",
    fontStyle:"italic"
  }
})

const SignIn = () => {
  const [Phone, setPhone] = useState('');
  const [passward, setPassward] = useState('');
const headers={
  'Authorization': 'basic T64Mdy7m['
}
  const Submit=useCallback(async()=>{
    try {
      const res = await axios.post(`http://192.168.0.102:5001/auth`,{phone:Phone,passward:passward},headers)
      AsyncStorage.setItem("token",res.data.data)
    } catch(err) {
      console.log(err.message);
    }
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.Caption}>Eticket</Text>
    <Pressable onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
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
    </View>
  )
}

export default SignIn
