import App from './app';
import PingController from './controllers/ping';
import BaseController from './controllers/base';

const port = process.env.PORT || 8080;
 
const app = new App(
  [
    new BaseController(),
    new PingController(),
  ],
  port,
);
 
app.listen();