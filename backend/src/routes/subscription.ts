import { Router } from 'express';
import { z } from 'zod';
import { stripe } from '../lib/stripe';
import { prisma } from '../lib/prisma';

const subscriptionRouter = Router();

const createCheckoutSchema = z.object({
  email: z.string().email(),
  age: z.number().int().min(13),
  priceId: z.string().min(3)
});

subscriptionRouter.post('/checkout', async (req, res) => {
  const parsed = createCheckoutSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const { email, age, priceId } = parsed.data;

  const user = await prisma.user.upsert({
    where: { email },
    update: { age },
    create: { email, age }
  });

  const customer = await stripe.customers.create({
    email,
    metadata: { userId: user.id }
  });

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer: customer.id,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel'
  });

  return res.json({ checkoutUrl: session.url });
});

subscriptionRouter.post('/webhook', async (req, res) => {
  const event = req.body;

  if (event?.type === 'customer.subscription.created') {
    const data = event.data.object;
    const customer = await stripe.customers.retrieve(data.customer as string);
    const userId = typeof customer !== 'string' ? customer.metadata.userId : undefined;

    if (userId) {
      await prisma.subscription.create({
        data: {
          userId,
          stripeCustomerId: data.customer as string,
          stripeSubscription: data.id,
          tier: data.items.data[0]?.price.lookup_key || 'pro',
          status: data.status
        }
      });
    }
  }

  return res.json({ received: true });
});

export { subscriptionRouter };
