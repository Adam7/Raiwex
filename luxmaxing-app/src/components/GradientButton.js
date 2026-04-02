import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function GradientButton({ title, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <LinearGradient colors={['#FFB6C1', '#6A5ACD']} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { borderRadius: 18, paddingVertical: 14, alignItems: 'center' },
  text: { color: '#fff', fontWeight: '700', fontSize: 16 }
});
