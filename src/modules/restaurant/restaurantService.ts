import { prismaClient } from "../../prismaClient"

const listRestaurantsService = async () => {
    const restaurants = await prismaClient.restaurant.findMany({
        select: {
            id: true,
            name: true,
            main_image: true,
            cuisine: true,
            location: true,
            price: true,
            slug: true,
        }
    });

    return restaurants;
}

const showRestaurantService = async (slug: string) => {
    const restaurant = await prismaClient.restaurant.findUnique({
        where: { slug }
    });

    return restaurant;
}

export { listRestaurantsService, showRestaurantService }