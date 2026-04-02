import React, { useState } from 'react';
import Markdown from 'react-native-markdown-display';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TipDetailScreen({ route }) {
  const { tip } = route.params;
  const [done, setDone] = useState([]);
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>{tip.title}</Text>
      <Markdown style={{ body: { color: '#e5e7eb' } }}>{tip.content || tip.description}</Markdown>
      <Text style={styles.section}>Steps</Text>
      {(tip.steps || []).map((step, idx) => (
        <Pressable key={step + idx} onPress={() => setDone((prev) => prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx])} style={styles.step}>
          <Text style={{ color: '#fff' }}>{done.includes(idx) ? '✅' : '⬜️'} {step}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826' },
  title: { color: '#fff', fontSize: 28, fontWeight: '800', marginBottom: 10 },
  section: { color: '#98FB98', fontWeight: '700', fontSize: 18, marginTop: 10 },
  step: { backgroundColor: '#ffffff14', borderRadius: 14, padding: 12, marginTop: 8 }
});
