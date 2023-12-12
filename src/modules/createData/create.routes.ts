import { Router } from 'express'
import { createDataController } from './createDataController';

const created = Router();

created.get('/', createDataController);

export { created }