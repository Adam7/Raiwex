# Raiwex

MVP кроссплатформенного приложения (iOS + Android) для подростков, которые хотят улучшать себя: уход за кожей и волосами, форму тела, дисциплину и уверенность.

## Что внутри

- `mobile/` — красивый интерфейс на Expo React Native.
- `backend/` — API на Express + Prisma + Stripe для подписок и хранения данных.

## 1) Запуск mobile (Expo)

```bash
cd mobile
cp .env.example .env
npm install
npm run start
```

Откройте в Expo Go (iOS/Android) или запустите:

```bash
npm run android
npm run ios
```

## 2) Запуск backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

API будет доступен на `http://localhost:4000`.

## Подписки и платежи

1. Создайте продукты и цены в Stripe.
2. Подставьте `STRIPE_SECRET_KEY` в `backend/.env`.
3. Передавайте `priceId` в `POST /subscription/checkout`.
4. Stripe webhook отправляйте в `POST /subscription/webhook`.

## Что можно улучшить дальше

- Авторизация (Firebase Auth / Supabase Auth).
- Реальные paywall-экраны и восстановление покупок через RevenueCat.
- Push-уведомления и streak-система.
- Админ-панель для публикации новых гайдов.
