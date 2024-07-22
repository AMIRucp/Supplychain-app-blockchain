import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo1.png')}
          style={styles.logo}
          resizeMode="contain" 
          onError={(error) => console.log('Image load error:', error)}
        />
        <Text style={styles.title}>TRAC CHAIN</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 70,
    width: 150, // Ensure the container has a fixed width
    height: 150, // Ensure the container has a fixed height
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0080',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ff0080',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  from: {
    color: '#ff0080',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
