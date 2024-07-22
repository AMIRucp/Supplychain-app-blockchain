import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  const handleBuyNow = () => {
    navigation.navigate('PaymentScreen', { product });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productBrand}>{product.brand}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyButtonText}>BUY NOW</Text>
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
  productImage: {
    width: '100%',
    height: 280,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  productBrand: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  productPrice: {
    color: '#FF0080',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDescription: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
