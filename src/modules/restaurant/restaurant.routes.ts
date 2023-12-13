import { Router } from 'express'
import { listRestaurantsController, showRestauranteController } from './restaurantController';

const restaurantRoutes = Router();

restaurantRoutes.get('/restaurants', listRestaurantsController);
restaurantRoutes.get('/restaurant/:slug', showRestauranteController)

export { restaurantRoutes }