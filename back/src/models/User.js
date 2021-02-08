const Sequelize = require('sequelize');
const db = require('../config/spongesDB');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = User;