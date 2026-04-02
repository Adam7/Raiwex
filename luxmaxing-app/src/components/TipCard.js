import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LockedPremiumBadge from './LockedPremiumBadge';

export default function TipCard({ tip, onPress, onFavorite, onSave, locked }) {
  const scale = useRef(new Animated.Value(1)).current;
  const pulse = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 1.2, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true })
    ]).start();
    onFavorite?.();
  };

  return (
    <Pressable onPress={onPress} style={styles.card}>
      {locked && <LockedPremiumBadge />}
      <Text style={styles.title}>{tip.title}</Text>
      <Text style={styles.desc}>{tip.description}</Text>
      <View style={styles.actions}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <Pressable onPress={pulse}>
            <Ionicons name="heart" size={22} color="#FF6B9D" />
          </Pressable>
        </Animated.View>
        <Pressable onPress={onSave}>
          <Ionicons name="bookmark" size={22} color="#fff" />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff18', borderColor: '#ffffff40', borderWidth: 1, borderRadius: 24, padding: 16, marginBottom: 12 },
  title: { color: '#fff', fontSize: 18, fontWeight: '800', marginTop: 8 },
  desc: { color: '#e5e7eb', marginTop: 8, lineHeight: 20 },
  actions: { marginTop: 12, flexDirection: 'row', gap: 14 }
});
