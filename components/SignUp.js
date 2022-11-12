import { Dimensions, Keyboard, Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React, { useCallback, useState } from 'react'
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
})
const SignUp = () => {
  const [name, setName] = useState('');
  const [Phone, setPhone] = useState('');

  const Submit=useCallback(()=>{
  },[])
  return (
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
    </View>
    <Text style={{alignSelf:"center",marginTop:15,borderWidth:1,padding:10,borderRadius:8}} onPress={Submit}>Submit</Text>
    </View>

    </Pressable>
  )
}

export default SignUp

