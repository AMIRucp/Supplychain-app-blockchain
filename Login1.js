// Login1.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { doc, getDoc } from 'firebase/firestore'; 
import { db, auth } from './FirebaseConfig'; 
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar'; 

const TextLinkContent = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.signupText}>{children}</Text>
  </TouchableOpacity>
);

const Login1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
    
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role || 'user'; 

        
        if (role === 'admin') {
          navigation.navigate('Admin'); 
          navigation.navigate('User'); 
        }
      } else {
        Alert.alert('Login failed', 'User data not found');
      }
    } catch (error) {
      Alert.alert('Login failed', 'User data not found');
     
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.logo}>
        <Image source={require('./assets/logo1.png')} style={styles.logoImage} />
      </View>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>✉️</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="EMAIL"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>🔑</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.signupLink}>
        <Text style={styles.signupText}>Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.loginLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  form: {
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FF4081',
    paddingVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: '#FF4081',
    fontSize: 20,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingLeft: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupLink: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
  },
  loginLink: {
    color: '#FF4081',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Login1;
