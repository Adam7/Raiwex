import { Router } from 'express';
import { prisma } from '../lib/prisma';

const tipsRouter = Router();

tipsRouter.get('/', async (_req, res) => {
  const tips = await prisma.tip.findMany({
    orderBy: { publishedAt: 'desc' },
    take: 30
  });

  res.json({ tips });
});

tipsRouter.post('/seed', async (_req, res) => {
  const count = await prisma.tip.count();

  if (count === 0) {
    await prisma.tip.createMany({
      data: [
        {
          title: 'Минимальная рутина для проблемной кожи',
          category: 'skin-care',
          content: 'Очищение, увлажнение, SPF и контроль сладкого.',
          isPremium: false
        },
        {
          title: 'Как подростку безопасно набирать массу',
          category: 'fitness',
          content: 'Профицит калорий, белок 1.6г/кг и прогрессия нагрузок.',
          isPremium: true
        }
      ]
    });
  }

  res.status(201).json({ ok: true });
});

export { tipsRouter };
