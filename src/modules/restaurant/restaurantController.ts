import { Request, Response } from "express";
import { listRestaurantsService } from "./restaurantService";

const listRestaurantsController = async (req: Request, res: Response) => {
    const restaurants = await listRestaurantsService();

    return res.status(200).json(restaurants)
}

export { listRestaurantsController }