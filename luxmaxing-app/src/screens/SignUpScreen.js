import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import GradientButton from '../components/GradientButton';
import { useAuth } from '../context/AuthContext';

export default function SignUpScreen({ navigation }) {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try {
      await signup(email, password);
    } catch {
      Alert.alert('Sign up failed', 'Please try with a different email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#9ca3af" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#9ca3af" value={password} onChangeText={setPassword} secureTextEntry />
      <GradientButton title="Sign up" onPress={submit} />
      <Pressable onPress={() => navigation.goBack()}><Text style={styles.link}>Back to login</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 20, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 30, fontWeight: '800', marginBottom: 20 },
  input: { backgroundColor: '#1f2937', color: '#fff', borderRadius: 14, padding: 12, marginBottom: 10 },
  link: { color: '#98FB98', marginTop: 12, textAlign: 'center' }
});
