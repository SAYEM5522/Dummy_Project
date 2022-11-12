import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapItem from './MapItem'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Departure from './Departure';
import Profile from './Profile';

const Screen = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Eticket" component={Departure} />
      <Drawer.Screen name="Location" component={MapItem} />
      <Drawer.Screen name="Profile" component={Profile} />

    </Drawer.Navigator>
  )
}

export default Screen

const styles = StyleSheet.create({})