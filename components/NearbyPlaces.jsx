import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

export default function NearbyPlaces({ place, num }) {
  const renderDay = (dayNumber) => (
    <View style={styles.day}>
      <Text style={styles.dayTitle}>Day {dayNumber} Plan</Text>
      <Text style={styles.text}><Text style={styles.highlight}>Morning : </Text> {place.nearby_places[`Day${dayNumber}`].Morning}</Text>
      <Text style={styles.text}><Text style={styles.highlight}>Afternoon : </Text> {place.nearby_places[`Day${dayNumber}`].AfterNoon}</Text>
      <Text style={styles.text}><Text style={styles.highlight}>Evening : </Text> {place.nearby_places[`Day${dayNumber}`].Evening}</Text>
      <Text style={styles.amount}>Amount: ₹{place.amount_in_rupees[`Day${dayNumber}`]}</Text>
    </View>
  );

  return (
    <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: num }).map((_, index) => renderDay(index + 1))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingLeft:5,
    backgroundColor: '#f8f9fa',
  },
  day: {
    marginRight: 20, // Adds space between the cards
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: 250, // Set a fixed width for the horizontal scroll
  },
  dayTitle: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    color: '#343a40',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 4,
    fontFamily: 'outfit-medium',
  },
  highlight: {
    fontFamily:'outfit-bold',
    color: Colors.PRIMARY
  },
  amount: {
    fontSize: 16,
    fontFamily: 'outfit-bold',
    color: '#7952b3',
    marginTop: 8,
  },
})
