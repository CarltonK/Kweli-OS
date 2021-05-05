import App from './app';
import PingController from './controllers/ping';
import BaseController from './controllers/base';
import DBConfig from './config/db';

const port = process.env.PORT || 8080;

new DBConfig();
 
const app = new App(
  [
    new BaseController(),
    new PingController(),
  ],
  port,
);
 
app.listen();