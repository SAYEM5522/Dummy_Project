import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BusRute = () => {
  const Rute="Mirpur 10"
  const Fare=100
  return (
    <View style={styles.Container}>
      <Text style={styles.BusRute}>BusRute:{Rute}</Text>
      <Text style={styles.BusFare}>Fare:{Fare} Taka</Text>
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
  },
  BusRute:{
    fontSize:20,
    fontWeight:"800"
  },
  BusFare:{
    fontSize:20,
    fontWeight:"800",
    marginTop:30
  }
})