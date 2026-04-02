import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PaywallScreen from '../screens/PaywallScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProgressScreen from '../screens/ProgressScreen';
import TipDetailScreen from '../screens/TipDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({ headerShown: false, tabBarStyle: { backgroundColor: '#121826' }, tabBarActiveTintColor: '#98FB98', tabBarIcon: ({ color, size }) => <Ionicons name={route.name === 'Home' ? 'home' : route.name === 'Library' ? 'library' : route.name === 'Progress' ? 'stats-chart' : 'person'} color={color} size={size} /> })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="TipDetail" component={TipDetailScreen} options={{ title: 'Method' }} />
      <Stack.Screen name="Paywall" component={PaywallScreen} options={{ title: 'Go Premium' }} />
    </Stack.Navigator>
  );
}
