import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { subscriptionRouter } from './routes/subscription';
import { tipsRouter } from './routes/tips';

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || '*'
  })
);

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'raiwex-api' });
});

app.use('/tips', express.json(), tipsRouter);
app.use('/subscription', express.json(), subscriptionRouter);

app.listen(port, () => {
  console.log(`Raiwex backend listening on ${port}`);
});
