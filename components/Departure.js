import { Dimensions, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window')
import axios from 'axios'
import { useDispatch } from 'react-redux'
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
    alignSelf:"center",
    marginTop:height/6.6
  }
})
const Departure = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  
   
  const navigation=useNavigation()
  const Submit=useCallback(()=>{
    navigation.navigate("BusRute",{
      departure:departure,
      destination:destination
    })
  },[departure,destination])
 
 

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    <View style={styles.inner}>
  <View>
        </View>
    <View style={{paddingTop:15}}>
    <Text> Departure </Text>
    <TextInput 
      onChangeText={(text)=>setDeparture(text)}
      placeholder='Departure...'
       style={styles.textInput} />
        <Text style={{marginTop:25}}> Destination </Text>
    <TextInput 
      onChangeText={(text)=>setDestination(text)}
      placeholder='Destination...'
       style={styles.textInput} />
    </View>
    <TouchableOpacity onPress={Submit}>
    <Text style={{alignSelf:"center",marginTop:15,borderWidth:1,paddingHorizontal:25,borderRadius:8,paddingVertical:10}} >Search Bus</Text>
    </TouchableOpacity>
    </View>

    </Pressable>
  )
}

export default Departure

