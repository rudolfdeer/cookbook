import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
import { serverConfig } from '../constants/configs/server.configs';
const db = require('../constants/configs/db.config');

export class App {
  client: express.Application;

  constructor() {
    this.client = express();
  }

  connectCors() {
    this.client.use(cors({ credentials: true }));
  }

  connectDb() {
    db.authenticate()
      .then(() => {
        console.log('connected to db');
      })
      .catch((err: Promise<void>) => {
        console.log(`error till connecting to db: ${err}`);
      });
  }

  connectMiddlewares() {
    this.client.use(bodyParser.json());
  }

  listen() {
    this.client.listen(serverConfig.port, () =>
      console.log(`sever started at:  ${serverConfig.port}`)
    );
  }
}
