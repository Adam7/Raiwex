import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LockedPremiumBadge() {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>Secret 🔒</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { backgroundColor: '#111827cc', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  text: { color: '#fff', fontWeight: '700', fontSize: 12 }
});
