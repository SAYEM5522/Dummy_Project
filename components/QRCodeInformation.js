import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QRCodeInformation = ({route}) => {
  const {data}=route.params
  return (
    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default QRCodeInformation

const styles = StyleSheet.create({})