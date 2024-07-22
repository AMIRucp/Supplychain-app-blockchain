import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebaseConfig'; 
const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

    
      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        role,
      });
      if (role === 'admin') {
        navigation.navigate('Admin'); 
      } else {
        navigation.navigate('User'); 
      }
    } catch (error) {
      
      Alert.alert('Sign Up failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('./app/assets/logo1.png')} style={styles.logoImage} />
      </View>
      <Text style={styles.title}>SIGN UP</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>👤</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="USERNAME"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
        </View>
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
      <View style={styles.roleSwitchContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'user' && styles.roleButtonActive]}
          onPress={() => setRole('user')}
        >
          <Text style={styles.roleButtonText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, role === 'admin' && styles.roleButtonActive]}
          onPress={() => setRole('admin')}
        >
          <Text style={styles.roleButtonText}>Admin</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.signupLink}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
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
    borderWidth: 1,
    borderColor: '#FF4081',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
  },
  roleSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  roleButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  roleButtonActive: {
    backgroundColor: '#FF4081',
  },
  roleButtonText: {
    color: '#fff',
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
    marginTop: 10,
  },
  signupText: {
    color: '#fff',
  },
  loginLink: {
    color: '#FF4081',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Signup;
