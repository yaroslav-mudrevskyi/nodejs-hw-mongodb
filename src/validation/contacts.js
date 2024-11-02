import Joi from 'joi';

import {
  contactTypeList,
  contactPhoneNumberRegExp,
} from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string()
    .pattern(contactPhoneNumberRegExp)
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email().min(3).max(30),
  isFavourite: Joi.boolean(),
  contactType: Joi.string
    .min(3)
    .max(30)
    .valid(...contactTypeList)
    .required(),
});
