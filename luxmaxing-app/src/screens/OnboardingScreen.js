import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import GradientButton from '../components/GradientButton';
import { useAuth } from '../context/AuthContext';
import { GOALS } from '../utils/constants';

export default function OnboardingScreen() {
  const [age, setAge] = useState('');
  const [goal, setGoal] = useState(GOALS[0]);
  const { completeOnboarding } = useAuth();

  const finish = async () => {
    if (Number(age) < 13) return Alert.alert('Age restriction', 'Luxmaxing is available for ages 13+ only.');
    await completeOnboarding({ age, goal });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Luxmaxing ✨</Text>
      <Text style={styles.subtitle}>Skin, hair, fitness, mindset, and glow-up methods in one app.</Text>
      <Text style={styles.label}>Pick your goal</Text>
      <View style={styles.goals}>{GOALS.map((g) => <Pressable key={g} onPress={() => setGoal(g)} style={[styles.goal, goal === g && styles.goalActive]}><Text style={styles.goalText}>{g}</Text></Pressable>)}</View>
      <TextInput value={age} onChangeText={setAge} placeholder="Enter your age" placeholderTextColor="#9ca3af" keyboardType="number-pad" style={styles.input} />
      <GradientButton title="Continue" onPress={finish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 20, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 32, fontWeight: '900' },
  subtitle: { color: '#d1d5db', marginVertical: 12, fontSize: 16 },
  label: { color: '#fff', fontWeight: '700', marginBottom: 8 },
  goals: { gap: 8, marginBottom: 12 },
  goal: { padding: 12, backgroundColor: '#ffffff18', borderRadius: 14 },
  goalActive: { borderWidth: 1, borderColor: '#98FB98' },
  goalText: { color: '#fff' },
  input: { backgroundColor: '#1f2937', color: '#fff', borderRadius: 14, padding: 12, marginBottom: 12 }
});
