import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; 
const MenuScreen = ({navigation}) => {
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Icon name="arrow-back" size={24} color="#F1408F" />
      </TouchableOpacity>
      <Text style={styles.menuTitle}>MENU</Text>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.iconContainer}>
          <Icon name="person" size={24} color="#F1408F" />
        </View>
        <Text style={styles.menuItemText}>PROFILE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.iconContainer}>
          <Icon name="receipt" size={24} color="#F1408F" />
        </View>
        <Text style={styles.menuItemText}>PAST ORDERS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.iconContainer}>
          <Icon name="location-pin" size={24} color="#F1408F" />
        </View>
        <Text style={styles.menuItemText}>TRACK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.iconContainer}>
          <Icon name="settings" size={24} color="#F1408F" />
        </View>
        <Text style={styles.menuItemText}>SETTINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signoutBtn} onPress={() => navigation.navigate('Login')}>
        <Icon name="exit-to-app" size={24} color="#F1408F" />
        <Text style={styles.signoutBtnText}>SIGN OUT</Text>
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
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#181818',
    marginBottom: 10,
    borderRadius: 10,
  },
  iconContainer: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 16,
    color: '#fff',
  },
  signoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F1408F',
    borderRadius: 10,
    marginTop: 'auto',
  },
  signoutBtnText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

export default MenuScreen;
