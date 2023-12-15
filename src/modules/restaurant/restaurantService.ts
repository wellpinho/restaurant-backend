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

const showRestaurantService = async (slug: string) => {
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

    return restaurant;
}

const menuRestaurantService = async (slug: string) => {
    const restaurant = await prismaClient.restaurant.findUnique({
        where: { slug },
        select: {
            items: true,
        }
    });

    if (!restaurant) {
        throw new Error('Restaurant menu not found!')
    }

    return restaurant.items;
}

const searchRestaurantService = async (city: string) => {
    try {
        const restaurant = await prismaClient.restaurant.findMany({
            // skip: 0,
            // take: 4,
            where: {
                slug: {
                    endsWith: city.toLowerCase(),
                },
            },
            select: {
                id: true,
                name: true,
                main_image: true,
                price: true,
                cuisine: true,
                location: true,
                slug: true,
            },
            orderBy: {
                name: 'asc'
            }
        });

        return restaurant;
    } catch (error) {
        return error
    }

}

export {
    listRestaurantsService,
    showRestaurantService,
    menuRestaurantService,
    searchRestaurantService
}