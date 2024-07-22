import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Adjust the path as per your Firebase setup

const ShowAllItemsScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products')); // Replace 'products' with your Firestore collection name
        const fetchedItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items: ', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>All Items</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            {/* Add more fields as per your Firestore document structure */}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
});

export default ShowAllItemsScreen;
