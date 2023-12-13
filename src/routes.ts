import { Request, Response, Router } from "express";
import { created } from "./modules/createData/create.routes";
import { restaurantRoutes } from "./modules/restaurant/restaurant.routes";

const routes = Router();

routes.use(created);
routes.use(restaurantRoutes);

export { routes };