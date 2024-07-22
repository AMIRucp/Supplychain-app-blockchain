// PaymentDetailsScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentDetailsScreen = ({ route, navigation }) => {
  const { product, walletAddress } = route.params;

  const handleTrackProduct = () => {
    navigation.navigate('TrackingScreen', {
      product,
      walletAddress,
      timestamp: new Date().toLocaleString(),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Product Name:</Text>
        <Text style={styles.value}>{product.name}</Text>
        <Text style={styles.label}>Product Price:</Text>
        <Text style={styles.value}>{product.price}</Text>
        <Text style={styles.label}>Crypto Wallet Address:</Text>
        <Text style={styles.value}>{walletAddress}</Text>
        <Text style={styles.label}>Date/Time:</Text>
        <Text style={styles.value}>{new Date().toLocaleString()}</Text>
      </View>
      <TouchableOpacity style={styles.trackButton} onPress={handleTrackProduct}>
        <Text style={styles.trackButtonText}>Track Your Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    color: '#ccc',
    fontSize: 18,
    marginBottom: 10,
  },
  trackButton: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentDetailsScreen;
