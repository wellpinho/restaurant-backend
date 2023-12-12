export const AppError = (message: string, statusCode: number) => {
    return { message, statusCode };
};