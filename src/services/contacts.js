import ContactCollection from '../db/models/Contacts.js';

import { calcPaginationData } from '../utils/calcPaginationData.js';

export const getContacts = async ({ page, perPage: limit }) => {
  const skip = (page - 1) * limit;
  const data = await ContactCollection.find().skip(skip).limit(limit);
  const count = await ContactCollection.find().countDocuments();

  const paginationData = calcPaginationData({ count, page, perPage: limit });

  return {
    data,
    ...paginationData,
  };
};

export const getContactById = (id) => ContactCollection.findById(id);

export const addContact = (payload) => ContactCollection.create(payload);

export const updateContactById = async (_id, payload, options = {}) => {
  const result = await ContactCollection.findOneAndUpdate({ _id }, payload, {
    includeResultMetadata: true,
    ...options,
  });

  if (!result || !result.value) return null;

  return {
    data: result.value,
  };
};

export const deleteContactById = (_id) =>
  ContactCollection.findByIdAndDelete({ _id });
