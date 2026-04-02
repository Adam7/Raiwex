import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import GradientButton from '../components/GradientButton';
import { useAuth } from '../context/AuthContext';
import { useSubscription } from '../context/SubscriptionContext';
import { useThemeMode } from '../context/ThemeContext';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { isPremium, restore } = useSubscription();
  const { mode, toggleMode } = useThemeMode();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>{user?.email || 'Anonymous user'}</Text>
      <Text style={styles.text}>Plan: {isPremium ? 'Premium' : 'Free'}</Text>
      <GradientButton title={`Theme: ${mode}`} onPress={toggleMode} style={{ marginTop: 10 }} />
      <GradientButton title="Restore purchases" onPress={() => restore().then(() => Alert.alert('Done', 'Purchases restored'))} style={{ marginTop: 10 }} />
      <GradientButton title="Log out" onPress={logout} style={{ marginTop: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 16 },
  title: { color: '#fff', fontSize: 30, fontWeight: '800', marginBottom: 16 },
  text: { color: '#d1d5db', fontSize: 16, marginBottom: 8 }
});
