'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Recipe_Comment',
      [
        {
          userId: 1,
          recipeId: 1,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 2,
          recipeId: 2,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 2,
          recipeId: 1,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 3,
          recipeId: 2,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 1,
          recipeId: 2,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipe_Comment', null, {});
  },
};
