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
   bottom:-(height-150)
  },
  BusName:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:"600",
    marginTop:15,
    fontStyle:"italic",
  }
})
const BusList = ({route}) => {
  const navigation=useNavigation()
  const Submit=useCallback(()=>{
    navigation.navigate("Scanner",{
      departure:route.params.departure,
      destination:route.params.destination
    })
  },[])
  return (
    <View>
      <Text style={styles.BusName}>Bikalpa</Text>
    <TouchableOpacity onPress={Submit}>
    <Text style={styles.BusButton} >Scan Bus QR code</Text>
    </TouchableOpacity>
    </View>
  )
}

export default BusList

