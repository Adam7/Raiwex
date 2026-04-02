# Luxmaxing App (Expo + Firebase + RevenueCat)

## Setup
1. `cd luxmaxing-app`
2. `npm install`
3. Create `.env` with:
   - `EXPO_PUBLIC_FIREBASE_API_KEY`
   - `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
   - `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `EXPO_PUBLIC_FIREBASE_APP_ID`
   - `EXPO_PUBLIC_REVENUECAT_APPLE_KEY`
   - `EXPO_PUBLIC_REVENUECAT_GOOGLE_KEY`
4. Configure Firebase Auth (Email/Password + Anonymous), Firestore, and Storage.
5. Create RevenueCat products and entitlement `premium`.

## Run
- Expo Go: `npm run start`
- Android simulator: `npm run android`
- iOS simulator: `npm run ios`

## Build notes
- In `app.json`, set iOS bundle and Android package IDs.
- For standalone builds, use `eas build --platform ios|android`.

## Firestore security rules
```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tips/{tipId} {
      allow read: if !resource.data.isPremium ||
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.subscriptionStatus in ['premium', 'premium_plus'];
    }
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Firestore indexes
- `tips`: `category ASC`, `createdAt DESC`
- `tips`: `isPremium ASC`, `createdAt DESC`

## UI mockup description
- Onboarding: gradient background, selectable goals, age gate.
- Home: category pills + glassmorphism tip cards + locked premium badge.
- Progress: habit checklist + streak counter + confetti animation.
- Paywall: full-screen offer list with highlighted gradient buttons.

## Repository note
- Binary images are omitted in this repository; add your own `src/assets/images/icon.png`, `splash.png`, and `adaptive-icon.png` before production builds if custom branding is needed.
