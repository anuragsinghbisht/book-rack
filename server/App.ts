import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(express.static(path.resolve(__dirname, '../dist')));
  }

  private routes(): void {
    const router = express.Router();
    router.use('/api', (req, res) => {
      res.json({
        message: 'Hello World'
      });
    });
    this.express.use('/', router);
  }
}

export default new App().express;
