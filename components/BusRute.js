import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

const BusRute = () => {
  const Rute="Mirpur 10"
  const Fare=100
  const navigation=useNavigation()
  const Submit=useCallback(()=>{
    navigation.navigate("BusList")
  },[])
  return (
    <View style={styles.Container}>
      <Text style={styles.BusRute}>BusRute:{Rute}</Text>
      <Text style={styles.BusFare}>Fare:{Fare} Taka</Text>
      <TouchableOpacity onPress={Submit}>
    <Text style={styles.BusButton} >Select A Bus</Text>
    </TouchableOpacity>
    </View>
  )
}

export default BusRute

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position:"relative"
  },
  BusRute:{
    fontSize:20,
    fontWeight:"800"
  },
  BusFare:{
    fontSize:20,
    fontWeight:"800",
    marginTop:30
  },
  BusButton:{
    alignSelf:"center",
    marginTop:15,
    borderWidth:1,
    paddingHorizontal:45,
    borderRadius:8,
    paddingVertical:10,
   position:"absolute",
  }
})