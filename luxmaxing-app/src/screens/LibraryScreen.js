import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TipCard from '../components/TipCard';
import { useSubscription } from '../context/SubscriptionContext';
import { CATEGORIES } from '../utils/constants';

const MOCK = CATEGORIES.map((c, i) => ({ id: String(i), title: `${c} Starter`, description: `Beginner friendly ${c.toLowerCase()} method`, category: c, isPremium: i % 2 === 0 }));

export default function LibraryScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const { isPremium } = useSubscription();
  const data = useMemo(() => MOCK.filter((t) => t.title.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Luxmaxing Library</Text>
      <TextInput style={styles.input} value={search} onChangeText={setSearch} placeholder="Search tips" placeholderTextColor="#9ca3af" />
      <FlatList data={data} keyExtractor={(i) => i.id} renderItem={({ item }) => <TipCard tip={item} locked={item.isPremium && !isPremium} onPress={() => (item.isPremium && !isPremium ? navigation.navigate('Paywall') : navigation.navigate('TipDetail', { tip: item }))} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 16 },
  title: { color: '#fff', fontSize: 30, fontWeight: '800' },
  input: { backgroundColor: '#1f2937', color: '#fff', borderRadius: 14, padding: 12, marginVertical: 12 }
});
