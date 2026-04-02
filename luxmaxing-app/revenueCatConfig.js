import { Platform } from 'react-native';
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra || {};

export const REVENUECAT_PUBLIC_KEY =
  Platform.OS === 'ios'
    ? process.env.EXPO_PUBLIC_REVENUECAT_APPLE_KEY || extra.revenueCatAppleKey
    : process.env.EXPO_PUBLIC_REVENUECAT_GOOGLE_KEY || extra.revenueCatGoogleKey;
