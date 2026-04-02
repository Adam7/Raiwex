import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HabitChecklist({ habits, completed, onToggle }) {
  return (
    <View style={styles.wrap}>
      {habits.map((habit) => {
        const active = completed.includes(habit);
        return (
          <Pressable key={habit} style={styles.row} onPress={() => onToggle(habit)}>
            <View style={[styles.box, active && styles.boxActive]} />
            <Text style={styles.text}>{habit}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  box: { width: 20, height: 20, borderRadius: 6, borderWidth: 2, borderColor: '#98FB98' },
  boxActive: { backgroundColor: '#98FB98' },
  text: { color: '#fff', fontSize: 16 }
});
