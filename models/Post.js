const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

// It will create Users table and add columns like id,name
// columns contains attributes
module.exports = sequelize.define("Post",{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.STRING(400),
      allowNull:false
    },
    likes: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
},{tableName:"Posts"})
