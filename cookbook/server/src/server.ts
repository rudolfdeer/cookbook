const { App } = require('./api/app');

export class Server {
  app: typeof App;

  constructor() {
    this.app = new App();
  }

  start() {
    this.app.connectCors();
    this.app.connectDb();
    this.app.connectMiddlewares();
    this.app.listen();
  }
}
