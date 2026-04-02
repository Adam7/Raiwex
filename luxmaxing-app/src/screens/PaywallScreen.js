import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import GradientButton from '../components/GradientButton';
import { useSubscription } from '../context/SubscriptionContext';

export default function PaywallScreen() {
  const { offerings, buy } = useSubscription();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unlock Premium Secrets 🔓</Text>
      <Text style={styles.subtitle}>Unlimited tips, tracker, before/after uploads, and no ads.</Text>
      {offerings.map((pkg) => (
        <GradientButton
          key={pkg.identifier}
          title={`${pkg.product.title} · ${pkg.product.priceString}`}
          onPress={() => buy(pkg).then(() => Alert.alert('Success', 'Premium activated!'))}
          style={{ marginTop: 10 }}
        />
      ))}
      <Text style={styles.note}>No commitment. Cancel anytime.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 16, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 32, fontWeight: '900' },
  subtitle: { color: '#d1d5db', marginVertical: 12, fontSize: 16 },
  note: { color: '#98FB98', marginTop: 14, textAlign: 'center' }
});
