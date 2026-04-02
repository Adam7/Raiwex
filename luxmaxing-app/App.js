import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { SubscriptionProvider } from './src/context/SubscriptionContext';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import { registerAndScheduleDaily } from './src/services/notificationService';

// Merged startup flow: themed navigation + explicit auth/onboarding routing.

const appTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121826',
    card: '#121826',
    text: '#FFFFFF',
    primary: '#98FB98',
    border: '#2B3650'
  }
};

function LoadingScreen() {
  return (
    <View style={styles.loadingWrap}>
      <Text style={styles.logo}>Luxmaxing ✨</Text>
      <ActivityIndicator size="large" color="#98FB98" />
      <Text style={styles.loadingText}>Подготавливаем твою персональную ленту...</Text>
    </View>
  );
}

function RootNavigation() {
  const { user, loading, hasOnboarded } = useAuth();

  useEffect(() => {
    // Schedule a daily reminder at 10:00 local time.
    registerAndScheduleDaily().catch(() => null);
  }, []);

  if (loading) return <LoadingScreen />;
  if (!hasOnboarded) return <AuthNavigator showOnboarding />;
  if (!user) return <AuthNavigator />;

  return <AppNavigator />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <SubscriptionProvider>
            <NavigationContainer theme={appTheme}>
              <StatusBar style="light" />
              <RootNavigation />
            </NavigationContainer>
          </SubscriptionProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingWrap: {
    flex: 1,
    backgroundColor: '#121826',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 14
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0.5
  },
  loadingText: {
    color: '#D1D5DB',
    fontSize: 15,
    textAlign: 'center'
  }
});
