import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
  const handleAddItem = () => {
    console.log('Add Item pressed');
    // Add logic for handling add item action
  };

  const handleShowAllItems = () => {
    console.log('Show All Items pressed');
    navigation.navigate('Showitems');
    // Add logic for handling show all items action
  };

  const handleProfile = () => {
    console.log('Profile pressed');
    // Add logic for handling profile action
  };

  const handleDispatch = () => {
    console.log('Dispatch pressed');
    // Add logic for handling dispatch action
  };

  const handleSignOut = () => {
    console.log('Sign Out pressed');
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DASHBOARD</Text>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Pending Orders</Text>
          <Text style={styles.statValue}>5</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Completed Orders</Text>
          <Text style={styles.statValue}>20</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Total Earnings</Text>
          <Text style={styles.statValue}>$400</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#F1408F' }]} onPress={() => navigation.navigate('Addproduct')}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#F1408F' }]} onPress={handleShowAllItems}>
          <Text style={styles.buttonText}>Show All Items</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#F1408F' }]} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#F1408F' }]} onPress={handleDispatch}>
          <Text style={styles.buttonText}>Dispatch</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.signOutButton, { backgroundColor: '#F1408F' }]} onPress={handleSignOut}>
        <Text style={styles.buttonText}>SIGN OUT</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stat: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  statLabel: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  signOutButton: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
