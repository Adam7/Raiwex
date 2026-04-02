import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import GradientButton from '../components/GradientButton';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login, loginAnonymous, resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      await login(email, password);
    } catch {
      Alert.alert('Login failed', 'Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#9ca3af" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#9ca3af" value={password} onChangeText={setPassword} secureTextEntry />
      {loading ? <ActivityIndicator color="#fff" /> : <GradientButton title="Log In" onPress={submit} />}
      <Pressable onPress={() => resetPassword(email)}><Text style={styles.link}>Reset password</Text></Pressable>
      <Pressable onPress={() => loginAnonymous()}><Text style={styles.link}>Continue anonymously</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={styles.link}>Create account</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 20, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 30, fontWeight: '800', marginBottom: 20 },
  input: { backgroundColor: '#1f2937', color: '#fff', borderRadius: 14, padding: 12, marginBottom: 10 },
  link: { color: '#98FB98', marginTop: 12, textAlign: 'center' }
});
