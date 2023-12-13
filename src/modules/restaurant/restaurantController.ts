import { Request, Response } from "express";
import { listRestaurantsService, menuRestaurantService, showRestaurantService } from "./restaurantService";

const listRestaurantsController = async (req: Request, res: Response) => {
    const restaurants = await listRestaurantsService();

    return res.status(200).json(restaurants)
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

export { listRestaurantsController, showRestauranteController, menuRestauranteController }