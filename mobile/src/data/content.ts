export type Category = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  gradient: [string, string];
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  perks: string[];
  highlighted?: boolean;
};

export const quickActions = [
  { id: 'skin', label: 'Кожа', emoji: '✨' },
  { id: 'hair', label: 'Волосы', emoji: '🧴' },
  { id: 'mass', label: 'Набор массы', emoji: '🏋️' },
  { id: 'fatloss', label: 'Похудение', emoji: '🔥' }
];

export const categories: Category[] = [
  {
    id: 'looksmax',
    title: 'Луксмаксинг',
    description: 'Фейс-рутина, осанка, стиль и привычки, которые реально повышают уверенность.',
    emoji: '💎',
    gradient: ['#613bff', '#2c1c6e']
  },
  {
    id: 'skin-care',
    title: 'Кожа и уход',
    description: 'Протоколы по типам кожи для подростков: утро/вечер, SPF, анти-акне.',
    emoji: '🫧',
    gradient: ['#2f83ff', '#163164']
  },
  {
    id: 'fitness',
    title: 'Форма тела',
    description: 'Тренировки дома и в зале: сжигание жира, набор мышц, прогресс-чек.',
    emoji: '💪',
    gradient: ['#ff664f', '#522622']
  },
  {
    id: 'mindset',
    title: 'Дисциплина и mindset',
    description: 'Планер привычек, фокус и система маленьких шагов на каждый день.',
    emoji: '🧠',
    gradient: ['#38c986', '#1c4f3a']
  }
];

export const premiumPlans: Plan[] = [
  {
    id: 'starter',
    name: 'Start',
    price: '$4.99 / месяц',
    perks: ['Базовые гайды', '7-дневные челленджи', 'Трекинг привычек']
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$11.99 / месяц',
    perks: ['Персональные планы', 'AI-рекомендации', 'Закрытые подборки'],
    highlighted: true
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$79.99 / год',
    perks: ['Все функции Pro', 'Приоритетная поддержка', 'Эксклюзивные интенсивы']
  }
];
