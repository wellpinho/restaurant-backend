import { Request, RequestHandler, Response } from "express";
import { listCuisineService, listLocationsService, listRestaurantsService, menuRestaurantService, searchRestaurantService, showRestaurantService } from "./restaurantService";

const listRestaurantsController = async (req: Request, res: Response) => {
    const restaurants = await listRestaurantsService();

    return res.status(200).json(restaurants)
}

const listLocationsController = async (req: Request, res: Response) => {
    const locations = await listLocationsService();

    return res.status(200).json(locations)
}

const listCuisineController = async (req: Request, res: Response) => {
    const cuisines = await listCuisineService();

    return res.status(200).json(cuisines)
}

const showRestauranteController = async (req: Request, res: Response) => {
    const { slug } = req.params;
    const restaurant = await showRestaurantService(slug)

    return res.status(200).json(restaurant);
}

const menuRestauranteController = async (req: Request, res: Response) => {
    const { slug } = req.params;
    const restaurant = await menuRestaurantService(slug)

    return res.status(200).json(restaurant);
}

type ReqQuery = {
    city: string;
}

const searchRestauranteController: RequestHandler<ReqQuery> = async (req: Request, res: Response) => {
    const { city } = req.query as ReqQuery;
    const restaurants = await searchRestaurantService(city)

    return res.status(200).json(restaurants);
}

export {
    listRestaurantsController,
    listLocationsController,
    listCuisineController,
    showRestauranteController,
    menuRestauranteController,
    searchRestauranteController
}