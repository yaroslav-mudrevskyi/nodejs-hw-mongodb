import createHttpError from 'http-errors';

import UserCollection from '../db/models/User.js';

export const registerUser = async (payload) => {
  const { email } = payload;
  const user = await UserCollection.findOne({ email });
  if (user) {
    throw createHttpError(409, 'Email already exist!');
  }

  return await UserCollection.create(payload);
};
