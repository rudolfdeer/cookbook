'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Recipe_Like',
      [
        {
          userId: 1,
          recipeId: 2,
        },
        {
          userId: 2,
          recipeId: 2,
        },
        {
          userId: 3,
          recipeId: 2,
        },
        {
          userId: 4,
          recipeId: 1,
        },
        {
          userId: 4,
          recipeId: 2,
        },
        {
          userId: 1,
          recipeId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipe_Like', null, {});
  },
};
