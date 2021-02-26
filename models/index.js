const { Sequelize } = require('sequelize');
require('dotenv').config();

const { env } = process;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  operatorsAliases: 0,

  pool: {
    max: 3,
    min: 0,
    acquire: env.DB_ACQUIRE_POOL,
    idle: env.DB_IDLE_POOL,
  },
});

const transaction = require('./transaction.model')(sequelize, Sequelize);

module.exports = {
  Sequelize,
  sequelize,
  transaction,
};
