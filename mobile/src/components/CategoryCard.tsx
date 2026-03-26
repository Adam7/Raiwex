import { StyleSheet, Text, View } from 'react-native';
import type { Category } from '../data/content';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <View style={[styles.card, { borderColor: category.gradient[0] }]}> 
      <View style={styles.row}>
        <Text style={styles.emoji}>{category.emoji}</Text>
        <Text style={styles.title}>{category.title}</Text>
      </View>
      <Text style={styles.description}>{category.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#11182a',
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    gap: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  emoji: {
    fontSize: 18
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700'
  },
  description: {
    color: '#adbae7',
    lineHeight: 20
  }
});
