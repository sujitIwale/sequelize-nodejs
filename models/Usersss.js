const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

// It will create Users table and add columns like id,name
// columns contains attributes
module.exports = sequelize.define("User",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique:true
    },
    
    createdAt: Sequelize.DATE 
},{tableName:"Users"})
