const { Sequelize } = require('sequelize');


// creating connection to mysql
const sequelize = new Sequelize('databaseName', 'userName', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Checking connection 
const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection();


module.exports = sequelize;
global.sequelize = sequelize;