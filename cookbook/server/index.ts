require("module-alias/register");
require("dotenv/config");

const { Server } = require("./src/server");

const server = new Server();
server.start();
