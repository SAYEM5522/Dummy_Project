import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    alignSelf:"center",
    marginTop:height/6.6
  }, BusButton:{
    alignSelf:"center",
    marginTop:15,
    borderWidth:1,
    paddingHorizontal:45,
    borderRadius:8,
    paddingVertical:10,
  //  position:"absolute",
  //  bottom:-(height-150)
  },
})
const QrCodegenerator = ({route}) => {
  const navigation=useNavigation()
  const BusName="Bikalpa"
  const uri="https://i.stack.imgur.com/i1Abv.png"
  const base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  const Submit=useCallback(()=>{
    navigation.navigate("Scanner",)
  },[])
  return (
    <View style={styles.container}>
        
    <QRCode
    value={`${BusName} ${route.params.departure} ${route.params.destination} ${route.params.data}`}
    logo={{uri: base64Logo}}
    logoSize={30}
    logoBackgroundColor='transparent'
    size={190}
    />

   </View>
  )
}

export default QrCodegenerator
