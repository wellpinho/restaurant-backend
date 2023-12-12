import { Request, Response, Router } from "express";
import { created } from "./modules/createData/create.routes";

const routes = Router();

routes.use(created);

export { routes };