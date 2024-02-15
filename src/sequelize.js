const  Sequelize  = require('sequelize');
const Config = require ("../config.js");

const sequelize = new Sequelize('db', Config.db.user, Config.db.pass, {
  host: Config.server.hostname,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
