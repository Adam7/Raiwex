import * as Notifications from 'expo-notifications';

export async function registerAndScheduleDaily() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return;
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: { title: 'New Lux Tip ✨', body: 'Open Luxmaxing and keep your streak alive.' },
    trigger: { hour: 10, minute: 0, repeats: true }
  });
}
