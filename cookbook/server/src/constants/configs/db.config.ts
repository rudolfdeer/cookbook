import { Sequelize } from 'sequelize';

export const db = new Sequelize('cookbook', 'postgres', '123', {
  port: 3001,
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
