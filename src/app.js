import express, { urlencoded } from 'express';
import cors from 'cors';
import routes from './routes.js';

class AppController {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      urlencoded({ extended: true }), 
      cors()
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new AppController().server;