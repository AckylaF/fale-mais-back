import express, { urlencoded } from "express";
import routes from './routes.js';

const server = express();

server.use(urlencoded({ extended: true }), routes);

server.listen(5000, () => {
  console.log("Server is running");
});
