import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { db, storage } from './firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProduct = ({ navigation }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const generateUniqueId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

  const handleImageUpload = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert('Permission denied', 'You need to enable permissions to access the library.');
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!pickerResult.canceled) {
        const pickedImageUri = pickerResult.assets[0].uri;
        setImage(pickedImageUri);
        console.log('Image picked:', pickedImageUri);

        const imageName = `${generateUniqueId()}.jpg`;
        const storageRef = ref(storage, `images/${imageName}`);
        const response = await fetch(pickedImageUri);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
        console.log('Uploaded image URL:', url);
      } else {
        console.log('Image picker was cancelled');
      }
    } catch (error) {
      console.error('Error picking image: ', error);
      Alert.alert('Error', 'Failed to pick an image. Please try again.');
    }
  };

  const handleAddProduct = async () => {
    if (!name || !brand || !price || !description) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'products'), {
        name,
        brand,
        price: parseFloat(price),
        description,
        imageUrl,
      });

      console.log('Product added!');
      Alert.alert('Success', 'Product added successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error adding product: ', error);
      Alert.alert('Error', 'Failed to add product');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Add Product</Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <TouchableOpacity style={styles.imagePicker} onPress={handleImageUpload}>
          <Text style={styles.buttonText}>Pick Image</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Brand"
          placeholderTextColor="#ccc"
          value={brand}
          onChangeText={setBrand}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#ccc"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          placeholderTextColor="#ccc"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#FF4081',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagePicker: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});

export default AddProduct;
