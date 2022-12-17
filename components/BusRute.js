import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
const BusRute = ({route}) => {
  const navigation=useNavigation()
  const [departureList,setDepartureList]=useState([])
  const [loading,setLoading]=useState(true)
  const fare=0
  
  
  const Submit=useCallback(()=>{
    navigation.navigate("BusList",{
      departure:route.params.departure,
      destination:route.params.destination
    })
  },[])
  const getBusToute=async()=>{
    await axios.get("http://192.168.0.102:5001/getBikalpa").then((res)=>{
     setDepartureList(res.data)
     setLoading(false)
    }).catch((err)=>{
     console.log(err.message)
    })
 }
 useEffect(()=>{
  getBusToute(),
  ()=>getBusToute()
 },[loading])
 
  return (
    <>
    {
      loading?
      <View>
        <Text>
          Loading
        </Text>
        </View>:
      <View style={styles.Container}>
      <Text style={styles.BusRute}>BusRute:{route.params.destination}</Text>
      
      {
        
        departureList.map(category =>
            departureList.map((subcategory, i) =>{
            if(category.stoppage===route.params.departure&& subcategory.stoppage===route.params.destination){
              return(
                <Text style={styles.BusFare} key={i}>Bus Fare:{Math.abs(subcategory.distance-category.distance)*2.5} Taka</Text>

              )
            }
           })
        )
         
        }

        
      <TouchableOpacity onPress={Submit}>
    <Text style={styles.BusButton} >Select A Bus</Text>
    </TouchableOpacity>
    </View>

    }
   
    </>
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