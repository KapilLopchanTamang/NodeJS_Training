const Sequelize = require('sequelize');
const dbConfig = require('../dbConfig/db.js');
``
const sequelize = new Sequelize(dbConfig.db, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool
});

sequelize
  .authenticate()
  .then(() => console.log('Connected to database successfully.'))
  .catch(console.error);

const db = {
  Sequelize,
  sequelize,
  blogs: require('./blog.js')(sequelize, Sequelize)
};

module.exports = db;
