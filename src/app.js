const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class AppController {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      express.urlencoded({ extended: true }), 
      cors()
    );
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new AppController().server;