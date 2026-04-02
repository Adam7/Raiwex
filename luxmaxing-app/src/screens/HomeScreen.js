import React, { useEffect, useMemo, useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryPills from '../components/CategoryPills';
import TipCard from '../components/TipCard';
import { useSubscription } from '../context/SubscriptionContext';
import { fetchTips, saveTipBookmark } from '../services/firestoreService';
import { CATEGORIES, FREE_TIP_LIMIT } from '../utils/constants';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { isPremium } = useSubscription();
  const { user } = useAuth();
  const [tips, setTips] = useState([]);
  const [category, setCategory] = useState(CATEGORIES[0]);

  useEffect(() => { fetchTips().then(setTips); }, []);

  const visibleTips = useMemo(() => tips.filter((tip) => tip.category === category), [tips, category]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Lux Tip ✨</Text>
      <CategoryPills categories={CATEGORIES} selected={category} onSelect={setCategory} />
      <FlatList
        data={visibleTips}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const locked = item.isPremium && !isPremium;
          const exceededFree = !isPremium && index >= FREE_TIP_LIMIT;
          return (
            <Animated.View style={{ opacity: 1 }}>
              <TipCard
                tip={item}
                locked={locked || exceededFree}
                onSave={() => user && saveTipBookmark(user.uid, item.id)}
                onPress={() => (locked || exceededFree ? navigation.navigate('Paywall') : navigation.navigate('TipDetail', { tip: item }))}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 16 },
  header: { color: '#fff', fontSize: 30, fontWeight: '800', marginBottom: 12 }
});
