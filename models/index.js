const {Sequelize} = require("sequelize");
const DB_CONFIG = require("../dbConfig");
const sequelizeInstance = new Sequelize(
    DB_CONFIG.DB,
    DB_CONFIG.USER,
    DB_CONFIG.PASSWORD,
    {
        host: DB_CONFIG.HOST,
        dialect: DB_CONFIG.dialect
    }
);

const db = {};

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

db.Books = require('./BooksModel')(sequelizeInstance, Sequelize);

module.exports = db;