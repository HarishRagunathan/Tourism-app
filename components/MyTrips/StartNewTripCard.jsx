import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import 'react-native-get-random-values';


export default function StartNewTripCard() {
  const router = useRouter()
  return (
    <View style={{
        padding:25,
        marginTop:80,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>
        <Ionicons name="location-sharp" size={30} color={'red'} />
      <Text style={{
        fontSize:25,
        fontFamily:'outfit-medium'
      }} >No trips  planned yet</Text>
      <Text style={{
        fontSize:20,
        fontFamily:'outfit-regular',
        textAlign:'center',
        color:Colors.GRAY
      }} >Looks like this time to plan a new travel experience! Get Started below</Text>
     <TouchableOpacity onPress={()=>router.push('/create-trip/ChooseTrip')} style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30
     }} >
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit-medium',
            fontSize:17
        }}>Start a new trip</Text>
     </TouchableOpacity>
    </View>
  )
}