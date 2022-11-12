import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  BusButton:{
    alignSelf:"center",
    marginTop:15,
    borderWidth:1,
    paddingHorizontal:45,
    borderRadius:8,
    paddingVertical:10,
   position:"absolute",
   bottom:-(height-100)
  }
})
const BusList = () => {
  const navigation=useNavigation()
  const Submit=useCallback(()=>{
    navigation.navigate("Scanner")
  },[])
  return (
    <View>
    <TouchableOpacity onPress={Submit}>
    <Text style={styles.BusButton} >Scan QR Code</Text>
    </TouchableOpacity>
    </View>
  )
}

export default BusList

