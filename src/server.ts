import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { AppError } from "./errors/AppErrors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(400).json({
            status: "Error",
            message: error.message,
        });
    }

    return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
        error,
    });
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));