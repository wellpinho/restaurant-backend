import { prismaClient } from "../../prismaClient"

const listRestaurantsService = async () => {
    const restaurants = await prismaClient.restaurant.findMany();

    return restaurants;
}

export { listRestaurantsService }