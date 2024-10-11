import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';

const PORT = Number(env('PORT', 3000));

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(logger);

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.get('/contacts', (req, res) => {
    res.send('<h1>Contact Page</h1>');
  });

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: err.message,
    });
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
