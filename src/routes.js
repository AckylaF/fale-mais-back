import { Router } from "express";
const routes = Router();

import FeeController from "./App/controllers/FeeController.js";

routes.post("/fee", FeeController.calculate);

export default routes;
