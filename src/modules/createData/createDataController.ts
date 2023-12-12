import { Request, Response } from "express";
import { createDataService } from "./createDataService";

export const createDataController = async (req: Request, res: Response) => {
    const response = await createDataService();
    return res.json(response)
}