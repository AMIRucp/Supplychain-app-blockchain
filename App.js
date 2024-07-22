
import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
//import Login1 from './Login';
//import Screen1 from './Screen1';
import TrackingScreen from './TrackingScreen';
import ShowAllItemsScreen from './Showitems';
import PaymentDetailsScreen from './PaymentDetail';
import MenuScreen from './Screen2';
import ProductList from './Productlist';
import DashboardScreen from './AdminDashborad';
import ProductDetails from './Productdetail';
import AddProduct from './Addproduct';
import Signup from './Signup';
import PaymentScreen from './PaymentScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="User" 
        component={ProductList} 
        options={{ headerShown: false }} 
      />
       <Stack.Screen 
        name="Admin" 
        component={DashboardScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ headerShown: false }} 
      />
       <Stack.Screen 
        name="Addproduct" 
        component={AddProduct} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Productdetail" 
        component={ProductDetails} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="PaymentScreen" 
        component={PaymentScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Showitems" 
        component={ShowAllItemsScreen} 
        options={{ headerShown: false }} 
      />
       <Stack.Screen 
        name="TrackingScreen" 
        component={TrackingScreen} 
        options={{ headerShown: false }} 
      />
       <Stack.Screen 
        name="PaymentDetail" 
        component={PaymentDetailsScreen} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  </NavigationContainer>
);
};
export default App;
0x51620Df35deE1528B7EEAbe654F36e1bAb242A0E