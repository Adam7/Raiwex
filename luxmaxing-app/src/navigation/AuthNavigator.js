import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator({ showOnboarding = false }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {showOnboarding && <Stack.Screen name="Onboarding" component={OnboardingScreen} />}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
