module.exports = (sequelizeInstance, Sequelize) => {
    const { DataTypes } = require('sequelize');

    const sequelize = new Sequelize('mysql::memory:');
    const Books = sequelize.define('Books', {
        title: DataTypes.STRING,
    });

    return Books;
}
