import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { initializeRevenueCat, getOfferings, purchasePackage, restorePurchases } from '../services/revenueCatService';

const SubscriptionContext = createContext(null);

export function SubscriptionProvider({ children }) {
  const [offerings, setOfferings] = useState([]);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await initializeRevenueCat();
        const currentOfferings = await getOfferings();
        setOfferings(currentOfferings);
      } catch {
        Alert.alert('Subscriptions unavailable', 'Please try again later.');
      }
    })();
  }, []);

  const value = useMemo(
    () => ({
      offerings,
      isPremium,
      buy: async (pkg) => {
        const status = await purchasePackage(pkg);
        setIsPremium(status);
      },
      restore: async () => {
        const status = await restorePurchases();
        setIsPremium(status);
      }
    }),
    [offerings, isPremium]
  );

  return <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>;
}

export const useSubscription = () => useContext(SubscriptionContext);
