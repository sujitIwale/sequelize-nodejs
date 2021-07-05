const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

// It will create Users table and add columns like id,name
// columns contains attributes
module.exports =  sequelize.define("User",{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull:false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique:true
        },
        roleId: {
          type: Sequelize.INTEGER,
          allowNull:false,
          references: {
            model:'Role',
            key:'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    },{tableName:"Users"});
