require('dotenv/config');

const { Server } = require('./lib/server');

const server = new Server();
server.start();
