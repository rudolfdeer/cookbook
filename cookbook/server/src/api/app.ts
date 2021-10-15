import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { serverConfig } from '../constants/configs/server.configs';
import { db } from '../constants/configs/db.config';
const { router } = require('./routes');

export class App {
  client: express.Application;

  constructor() {
    this.client = express();
  }

  connectCors() {
    this.client.use(cors({ credentials: true }));
  }

  async connectDb() {
    try {
      await db.authenticate();
      console.log('connected to db');
    } catch (err) {
      console.error(`error till connecting to db: ${err}`);
    }
  }

  connectMiddlewares() {
    this.client.use(json());
  }

  connectRoutes() {
    this.client.use(router);
  }

  listen() {
    this.client.listen(serverConfig.port, () =>
      console.log(`sever started at: http://localhost:${serverConfig.port}`)
    );
  }
}
