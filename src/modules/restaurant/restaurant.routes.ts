import { Router } from 'express'
import { listRestaurantsController } from './restaurantController';

const restaurantRoutes = Router();

restaurantRoutes.get('/restaurants', listRestaurantsController);

export { restaurantRoutes }