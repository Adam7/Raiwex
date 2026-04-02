import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDoc, collection, doc, getDocs, limit, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const TIP_CACHE_KEY = 'tip_cache_v1';

export async function fetchTips() {
  try {
    const q = query(collection(db, 'tips'), orderBy('createdAt', 'desc'), limit(50));
    const snapshot = await getDocs(q);
    const tips = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    await AsyncStorage.setItem(TIP_CACHE_KEY, JSON.stringify(tips));
    return tips;
  } catch {
    const cached = await AsyncStorage.getItem(TIP_CACHE_KEY);
    return cached ? JSON.parse(cached) : [];
  }
}

export async function saveHabitProgress(userId, payload) {
  const key = new Date().toISOString().slice(0, 10);
  await setDoc(doc(db, 'users', userId, 'userProgress', key), payload, { merge: true });
}

export async function saveTipBookmark(userId, tipId) {
  await addDoc(collection(db, 'users', userId, 'bookmarks'), { tipId, createdAt: Date.now() });
}
