
 import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TrackingScreen = ({ route }) => {
  const { product, walletAddress, timestamp } = route.params;

  // Placeholder coordinates for the map marker
  const markerCoordinate = {
    latitude: 31.5497,
    longitude: 74.3436,
  };
  // Effect to update date states when timestamp changes
  useEffect(() => {
    // Convert timestamp to Date objects
    const purchaseDateObj = new Date(timestamp);
    if (isNaN(purchaseDateObj.getTime())) {
      console.error('Invalid timestamp:', timestamp);
      return;
    }
  }, [timestamp]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Product Name:</Text>
          <Text style={styles.value}>{product.name}</Text>

          <Text style={styles.label}>Crypto Wallet Address:</Text>
          <Text style={styles.value}>{walletAddress}</Text>
          <Text style={styles.label}>Time and date of purchase:</Text>
          <Text style={styles.value}>{timestamp}</Text>
          <Text style={styles.label}>Estimated Arrival:</Text>
          <Text style={styles.value}>3 to 5 days </Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: markerCoordinate.latitude,
              longitude: markerCoordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            scrollEnabled={true} // Enable scroll on the map
          >
            <Marker coordinate={markerCoordinate} />
          </MapView>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  detailsContainer: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
  mapContainer: {
    height: 300, // Set a fixed height for the map container
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default TrackingScreen;
