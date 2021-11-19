'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recipe', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      views: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      directions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipe');
  },
};
