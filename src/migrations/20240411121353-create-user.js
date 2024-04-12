'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        field: 'display_name',
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: Sequelize.STRING,
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
