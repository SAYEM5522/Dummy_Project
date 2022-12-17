import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

const QRCodeInformation = ({route}) => {
  const {data}=route.params
  const navigation=useNavigation()
  const Submit=useCallback(()=>{
    navigation.navigate("QrCodegenerator",
    {
      departure:route.params.departure,
      destination:route.params.destination,
      data:data
    }
    )
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.content}> Bus Plate Number: {data}</Text>
      <Text onPress={Submit} style={styles.BusButton} >Confirm Ticket</Text>

    </View>
  )
}

export default QRCodeInformation

const styles = StyleSheet.create({
  BusButton:{
    alignSelf:"center",
    marginTop:15,
    borderWidth:1,
    paddingHorizontal:45,
    borderRadius:8,
    paddingVertical:10,
  //  position:"absolute",
  //  bottom:-(height-150)
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    marginTop:-40,
    fontSize:16,
    fontWeight:"600"

  }
})