import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    alignSelf:"center",
    marginTop:height/6.6
  }
})
const QrCodegenerator = ({route}) => {
  const BusName="Bikalpa"
  const uri="https://i.stack.imgur.com/i1Abv.png"
  const base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <View style={styles.container}>
        
    <QRCode
    value={`${BusName} ${route.params.departure} ${route.params.destination}`}
    logo={{uri: base64Logo}}
    logoSize={30}
    logoBackgroundColor='transparent'
    size={190}
    />
   </View>
  )
}

export default QrCodegenerator
