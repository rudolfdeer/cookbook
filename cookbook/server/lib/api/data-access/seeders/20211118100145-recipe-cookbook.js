'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Recipe_Cookbook',
      [
        {
          recipeId: 1,
          cookbookId: 2,
        },
        {
          recipeId: 1,
          cookbookId: 1,
        },
        {
          recipeId: 1,
          cookbookId: 3,
        },
        {
          recipeId: 2,
          cookbookId: 2,
        },
        {
          recipeId: 2,
          cookbookId: 3,
        },
        {
          recipeId: 2,
          cookbookId: 1,
        },
        {
          recipeId: 3,
          cookbookId: 2,
        },
        {
          recipeId: 3,
          cookbookId: 1,
        },
        {
          recipeId: 3,
          cookbookId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipe_Cookbook', null, {});
  },
};
