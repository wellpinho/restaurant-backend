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

interface IShowRestaurant {
    id: number,
    name: string,
    images: string[],
    description: string,
    slug: string,
}

const showRestaurantService = async (slug: string): Promise<IShowRestaurant> => {
    const restaurant = await prismaClient.restaurant.findUnique({
        where: { slug },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true,
        }
    });

    if (!restaurant) {
        throw new Error('Restaurant not found!')
    }

    return restaurant;
}

export { listRestaurantsService, showRestaurantService }