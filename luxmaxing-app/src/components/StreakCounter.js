import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StreakCounter({ streak }) {
  return (
    <View style={styles.box}>
      <Text style={styles.value}>{streak} 🔥</Text>
      <Text style={styles.label}>Day streak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: '#6A5ACD55', padding: 16, borderRadius: 20, alignItems: 'center' },
  value: { color: '#fff', fontSize: 28, fontWeight: '800' },
  label: { color: '#d1d5db' }
});
