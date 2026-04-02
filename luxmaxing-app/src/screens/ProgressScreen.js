import LottieView from 'lottie-react-native';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HabitChecklist from '../components/HabitChecklist';
import StreakCounter from '../components/StreakCounter';
import { useAuth } from '../context/AuthContext';
import { saveHabitProgress } from '../services/firestoreService';
import { calculateStreak, formatDateKey } from '../utils/helpers';

const habits = ['Drink water', 'Skincare routine', 'Workout'];

export default function ProgressScreen() {
  const { user } = useAuth();
  const [completed, setCompleted] = useState([]);
  const [days, setDays] = useState([]);

  const toggle = async (habit) => {
    const next = completed.includes(habit) ? completed.filter((h) => h !== habit) : [...completed, habit];
    setCompleted(next);
    const today = formatDateKey();
    const nextDays = next.length > 0 ? [...new Set([...days, today])] : days;
    setDays(nextDays);
    if (user) await saveHabitProgress(user.uid, { date: today, completedHabits: next });
  };

  const streak = useMemo(() => calculateStreak(days), [days]);

  return (
    <View style={styles.container}>
      <StreakCounter streak={streak} />
      <HabitChecklist habits={habits} completed={completed} onToggle={toggle} />
      {streak >= 3 && <LottieView source={require('../assets/animations/confetti.json')} autoPlay loop={false} style={{ height: 180 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121826', padding: 16, gap: 16 }
});
