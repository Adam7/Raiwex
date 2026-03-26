import { StyleSheet, Text, View } from 'react-native';
import type { Plan } from '../data/content';

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <View style={[styles.card, plan.highlighted ? styles.highlighted : null]}>
      <View style={styles.topRow}>
        <Text style={styles.name}>{plan.name}</Text>
        {plan.highlighted ? <Text style={styles.pill}>Популярный</Text> : null}
      </View>
      <Text style={styles.price}>{plan.price}</Text>
      {plan.perks.map((item) => (
        <Text key={item} style={styles.perk}>• {item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#12182a',
    borderColor: '#2d3858',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    gap: 6
  },
  highlighted: {
    borderColor: '#8f63ff',
    backgroundColor: '#191334'
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700'
  },
  pill: {
    color: '#f6f2ff',
    backgroundColor: '#7147ff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: '600'
  },
  price: {
    color: '#d2c8ff',
    fontSize: 17,
    fontWeight: '700'
  },
  perk: {
    color: '#a9b5dd'
  }
});
