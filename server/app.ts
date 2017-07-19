import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as flash from 'connect-flash';
import * as session from 'express-session';
import * as passport from 'passport';
import router from './routes/index.route';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(cookieParser());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.set('view engine', 'ejs');
    this.express.set('views', 'server/views');
    // this.express.use(express.static(path.resolve(__dirname, '../dist')));
    this.express.use(session({
      secret: 'ilovescotchyscotch',
      resave: false,
      saveUninitialized: true
    }));
    this.express.use(passport.initialize());
    this.express.use(passport.session());
    this.express.use(flash());
  }

  private routes(): void {
    this.express.use('/', router);
  }
}

export default new App().express;
