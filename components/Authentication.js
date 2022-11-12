import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
const { width, height } = Dimensions.get('window')

const Authentication = () => {
  return (
    <View>
      <SignUp/>
      <View style={{display:"flex",alignItems:"center",flexDirection:"row",alignSelf:"center"}}>
      <Text style={{alignSelf:"center"}}>Already have an account</Text> 
      <Text style={{marginLeft:10,fontWeight:"800"}}>Sign In</Text>
      </View>
    </View>
  )
}

export default Authentication

const styles = StyleSheet.create({})