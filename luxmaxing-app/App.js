import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { SubscriptionProvider } from './src/context/SubscriptionContext';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

function RootNavigation() {
  const { user, loading, hasOnboarded } = useAuth();
  if (loading) return null;
  if (!hasOnboarded) return <AuthNavigator showOnboarding />;
  return user ? <AppNavigator /> : <AuthNavigator />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <SubscriptionProvider>
            <NavigationContainer>
              <StatusBar style="light" />
              <RootNavigation />
            </NavigationContainer>
          </SubscriptionProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
