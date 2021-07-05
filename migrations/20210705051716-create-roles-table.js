'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const Role =  queryInterface.createTable('Roles',{
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
      },{tableName: "Roles"})

      Role.associate = function(models) {
        Role.hasMany(models.User, {as: 'role'})
      };
      return Role;
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
