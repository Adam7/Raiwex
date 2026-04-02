import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function CategoryPills({ categories, selected, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {categories.map((cat) => (
        <Pressable key={cat} onPress={() => onSelect(cat)} style={[styles.pill, selected === cat && styles.active]}>
          <Text style={[styles.text, selected === cat && styles.activeText]}>{cat}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: 8, paddingVertical: 4 },
  pill: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, backgroundColor: '#ffffff22' },
  active: { backgroundColor: '#98FB98' },
  text: { color: '#fff', fontWeight: '600' },
  activeText: { color: '#111827' }
});
