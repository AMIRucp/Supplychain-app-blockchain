import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { db } from './firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'products'),
      (snapshot) => {
        const productsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setProducts(productsData);
      },
      (error) => {
        console.error('Error fetching products: ', error);
      }
    );
    return () => unsubscribe();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>EXPLORE</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products..."
          placeholderTextColor="#ccc"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.productContainer}>
        {filteredProducts.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productItem} onPress={() => navigation.navigate('Productdetail', { product })}>
            <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productBrand}>{product.brand}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#FF4081',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  productContainer: {
    paddingHorizontal: 20,
  },
  productItem: {
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 280,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productBrand: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  productPrice: {
    color: '#FF0080',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProductList;
