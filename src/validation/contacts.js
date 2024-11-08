import Joi from 'joi';

import {
  contactTypeList,
  contactPhoneNumberRegExp,
} from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .pattern(contactPhoneNumberRegExp)
    .required()
    .messages({
      'string.base': 'Phone number should be a string',
      'string.min': 'Phone number should have at least {#limit} characters',
      'string.max': 'Phone number should have at most {#limit} characters',
      'any.required': 'Phone number is required',
    }),
  email: Joi.string().email().min(3),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid(...contactTypeList)
    .required(),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().pattern(contactPhoneNumberRegExp).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().min(3),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .min(3)
    .max(20),
});
