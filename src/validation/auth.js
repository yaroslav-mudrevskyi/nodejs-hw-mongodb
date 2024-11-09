import Joi from 'joi';

import { emailRexExp } from '../constants/users.js';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().pattern(emailRexExp).required(),
  password: Joi.string().min(8).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().pattern(emailRexExp).required(),
  password: Joi.string().required(),
});
