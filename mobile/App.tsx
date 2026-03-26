import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories, premiumPlans, quickActions } from './src/data/content';
import { CategoryCard } from './src/components/CategoryCard';
import { PlanCard } from './src/components/PlanCard';
import { ActionChip } from './src/components/ActionChip';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.badge}>Raiwex</Text>
          <Text style={styles.title}>Прокачай себя на 1% каждый день</Text>
          <Text style={styles.subtitle}>
            Советы и программы для кожи, волос, тела, набора массы, похудения и уверенности.
          </Text>
        </View>

        <View style={styles.actionsRow}>
          {quickActions.map((item) => (
            <ActionChip key={item.id} label={item.label} emoji={item.emoji} />
          ))}
        </View>

        <SectionTitle title="Разделы трансформации" />
        <View style={styles.grid}>
          {categories.map((item) => (
            <CategoryCard key={item.id} category={item} />
          ))}
        </View>

        <SectionTitle title="Подписки" />
        <View style={styles.planStack}>
          {premiumPlans.map((item) => (
            <PlanCard key={item.id} plan={item} />
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Платежи, контент и прогресс синхронизируются через backend API + базу данных.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <Text style={styles.sectionTitle}>{title}</Text>;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#05070f'
  },
  container: {
    paddingHorizontal: 18,
    paddingBottom: 36,
    gap: 18
  },
  header: {
    marginTop: 10,
    backgroundColor: '#12182b',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#253154'
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#663cff',
    color: '#f5f2ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 30,
    fontWeight: '700',
    marginBottom: 10
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800'
  },
  subtitle: {
    marginTop: 10,
    color: '#b8c2ee',
    fontSize: 15,
    lineHeight: 22
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6
  },
  grid: {
    gap: 12
  },
  planStack: {
    gap: 12
  },
  footer: {
    marginTop: 6,
    backgroundColor: '#0e1424',
    borderColor: '#26304f',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14
  },
  footerText: {
    color: '#9ca8d8',
    lineHeight: 20
  }
});
