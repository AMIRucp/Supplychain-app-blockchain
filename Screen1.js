import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const Screen1 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Leather Jacket',
      brand: 'Levis',
      price: '20$',
      image: require('./app/assets/l4.png'),
      description: 'A stylish and durable leather jacket for all occasions.',
    },
    {
      id: 2,
      name: 'Hoodie',
      brand: 'Levis',
      price: '15$',
      image: require('./assets/l5.png'),
      description: 'Comfortable and warm hoodie, perfect for casual wear.',
    },
    {
      id: 3,
      name: 'Airpod pro',
      brand: 'Apple',
      price: '10$',
      image: require('./assets/l6.png'),
      description: 'Airpod pro Gen1.',
    },
  ];

  const handleProductPress = (product) => {
    console.log('Product clicked:', product);
    
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>EXPLORE</Text>
        <View style={styles.threeDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={require('./assets/Searchicon.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="SEARCH"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.productContainer}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productItem} onPress={() => handleProductPress(product)}>
            <Image source={product.image} style={styles.productImage} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  threeDots: {
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF0080',
    marginLeft: 4,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
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
    resizeMode: 'cover'
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

export default Screen1;
