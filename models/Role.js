const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

module.exports =  sequelize.define("Role",{
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type:Sequelize.STRING,
            allowNull:false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    })


