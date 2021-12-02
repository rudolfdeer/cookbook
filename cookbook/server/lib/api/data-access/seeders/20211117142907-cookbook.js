'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cookbook',
      [
        {
          image: 'images/cookbook-itsallaboutpancakes.jpg',
          title: 'All about pancakes',
          user_id: 1,
          description: 'lorem ',
          views: 459,
          tags: ['Without eggs', 'Without milk'],
        },
        {
          image: 'images/cookbook-icecreamdream.jpg',
          title: 'Icecream dream',
          user_id: 1,
          description: 'lorem ',
          views: 584,
          tags: ['Vegetarian', 'Without milk'],
        },
        {
          image: 'images/cookbook-fastbreakfast.jpeg',
          title: 'Fast breakfast',
          user_id: 2,
          description: 'lorem ',
          views: 359,
          tags: ['Without eggs', 'Without milk', 'Vegetarian'],
        },
        {
          image: 'images/cookbook-salad.jpeg',
          title: 'Salads',
          user_id: 3,
          description: 'lorem ',
          views: 198,
          tags: ['Without milk'],
        },
        {
          image: 'images/canapes.jpg',
          title: 'The best cookbook',
          user_id: 4,
          description: 'lorem ',
          views: 784,
          tags: ['Vegetarian', 'Without eggs'],
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cookbook', null, {});
  },
};
