import { Router } from 'express'
import { listRestaurantsController, menuRestauranteController, showRestauranteController } from './restaurantController';

const restaurantRoutes = Router();

restaurantRoutes.get('/restaurants', listRestaurantsController);
restaurantRoutes.get('/restaurant/:slug', showRestauranteController);
restaurantRoutes.get('/restaurant/:slug/menu', menuRestauranteController);

export { restaurantRoutes }