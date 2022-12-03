import { Dimensions, StyleSheet, Text, View,Pressable,KeyboardAvoidingView,TextInput,Keyboard, LogBox } from 'react-native'
import React, { useState,useEffect, useCallback } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
const MapItem = () => {

   return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} 
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>
  </View>
  );}

export default MapItem
