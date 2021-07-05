'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const User = await queryInterface.createTable('Users',{
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
          references: {
            model:'Roles',
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
      })

      User.associate = function(models) {
        User.belongsTo(models.Role, {foreignKey: 'roleId', as: 'role'})
      };
    
      return User;
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
