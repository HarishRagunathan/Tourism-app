import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import jsonData from '../../components/json/Mytrips.json';

export default function TamilNaduTrips() {
  const [selectedDays, setSelectedDays] = useState('5'); // Initialize selectedDays
  const [searchResults, setSearchResults] = useState(jsonData.destinations);
  const router = useRouter();

  useEffect(() => {
    // Automatically filter results based on input (if needed)
    setSearchResults(jsonData.destinations);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.resultsContainer} 
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
      >
        {searchResults.length > 0 ? (
          searchResults.map((place) => (
            <TouchableOpacity 
              key={place.name} 
              onPress={() => router.push({
                pathname: '/create-trip/MarkedTrips', 
                params: { place: JSON.stringify(place), selectedDays }
              })} 
              style={styles.placeContainer}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: place.image }} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.destinationName}>{place.name}</Text>
                  {selectedDays ? (
                    <Text style={styles.amountText}>
                      Total Amount for {selectedDays} Days: ₹{place.amount_in_rupees[`Day${selectedDays}`]}
                    </Text>
                  ) : (
                    <Text style={styles.amountText}>Select Days to see amount</Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.error}>No destinations found</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  details: {
    padding: 10,
    paddingTop: 15
  },
  destinationName: {
    fontSize: 18,
    fontFamily: 'outfit-bold'
  },
  amountText: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'outfit-medium',
  },
  subheading: {
    fontSize: 25,
    fontFamily: 'outfit-bold',
    margin: 15,
    marginTop: 30,
    textAlign: 'center'
  },
  resultsContainer: {
    flexDirection: 'column', // Change to column to display one card per row
  },
  placeContainer: {
    width: '100%', // Full width for one card per row
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10
  },
});
