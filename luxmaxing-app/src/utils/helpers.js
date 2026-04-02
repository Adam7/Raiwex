export const formatDateKey = (date = new Date()) => date.toISOString().slice(0, 10);

export function calculateStreak(completedDates = []) {
  const sorted = [...new Set(completedDates)].sort().reverse();
  let streak = 0;
  let cursor = new Date();
  for (const dateStr of sorted) {
    const expected = cursor.toISOString().slice(0, 10);
    if (dateStr === expected) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else if (streak === 0) {
      cursor.setDate(cursor.getDate() - 1);
      if (dateStr === cursor.toISOString().slice(0, 10)) streak += 1;
      else break;
    } else {
      break;
    }
  }
  return streak;
}
