const Sequelize = require('sequelize');
                                // name     db          pw
module.exports = new Sequelize('sponges', 'postgres', 'odp@dCe#1973H', {
    host: 'sponges_db',  // db
    dialect: 'postgres',
    pool: {
        max: 100, //25 connetions per 1GB of RAM, DigitalOcean's PostgreSQL
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});