import { Router } from 'express'
import { listRestaurantsController, menuRestauranteController, searchRestauranteController, showRestauranteController } from './restaurantController';

const restaurantRoutes = Router();

restaurantRoutes.get('/restaurants', listRestaurantsController);
restaurantRoutes.get('/restaurant/:slug', showRestauranteController);
restaurantRoutes.get('/restaurant/:slug/menu', menuRestauranteController);
restaurantRoutes.get('/search', searchRestauranteController);

export { restaurantRoutes }