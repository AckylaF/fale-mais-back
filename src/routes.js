const Router = require('express').Router;
const routes = Router();

const FeeController = require("./App/controllers/FeeController.js");

routes.post("/fee", FeeController.calculate);

module.exports = routes;
