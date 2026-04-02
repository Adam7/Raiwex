import Purchases from 'react-native-purchases';
import { REVENUECAT_PUBLIC_KEY } from '../../revenueCatConfig';

export async function initializeRevenueCat() {
  if (!REVENUECAT_PUBLIC_KEY) return;
  await Purchases.configure({ apiKey: REVENUECAT_PUBLIC_KEY });
}

export async function getOfferings() {
  const offerings = await Purchases.getOfferings();
  return offerings.current?.availablePackages || [];
}

export async function purchasePackage(pkg) {
  const result = await Purchases.purchasePackage(pkg);
  return Boolean(result.customerInfo?.entitlements?.active?.premium);
}

export async function restorePurchases() {
  const customerInfo = await Purchases.restorePurchases();
  return Boolean(customerInfo?.entitlements?.active?.premium);
}
