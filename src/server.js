import express from 'express';
import cors from 'cors';

import authRouter from './routers/auth.js';
import contactsRouter from './routers/contacts.js';

import { logger } from './middlewares/logger.js';
import { env } from './utils/env.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(env('PORT', 3000));

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(logger);

  app.use(express.json());

  app.use('/auth', authRouter);

  app.use('/contacts', contactsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
