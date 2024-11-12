import { Router } from 'express';

import * as contactControllers from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';
import {
  contactAddSchema,
  contactUpdateSchema,
} from '../validation/contacts.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWrapper(contactControllers.getContactsController));

contactsRouter.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactControllers.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactControllers.addContactController),
);

contactsRouter.patch(
  '/:contactId',
  validateBody(contactUpdateSchema),
  isValidId,
  ctrlWrapper(contactControllers.updateContactController),
);

contactsRouter.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactControllers.deleteContactController),
);

export default contactsRouter;
