// PaymentScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PaymentScreen = ({ route }) => {
  const { product } = route.params;
  const [walletAddress, setWalletAddress] = useState('');
  const navigation = useNavigation();

  const handlePayment = () => {
    if (walletAddress.trim() === '') {
      Alert.alert('Error', 'Please enter a valid wallet address.');
      return;
    }
    // Simulate payment success
    Alert.alert('Payment Successful', 'Payment for ' + product.name + ' is successful!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('PaymentDetail', { product, walletAddress }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paymentText}>Payment</Text>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Crypto Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />
      <TouchableOpacity style={styles.proceedButton} onPress={handlePayment}>
        <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productName: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  productPrice: {
    color: '#FF0080',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
