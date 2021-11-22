'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Recipe',
      [
        {
          id: 1,
          title: 'Fresh meat',
          image: 'images/freshmeat.jpg',
          user_id: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur ',
          directions: ['Take', 'Prepare', 'Cook'],
          ingredients: ['meat - 500g', 'garlic - 5g'],
          time: 60,
          views: 252,
        },
        {
          id: 2,
          title: 'Pancakes new',
          image: 'images/pancakesnew.jpg',
          user_id: 1,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna ',
          directions: ['Take', 'Prepare', 'Cook'],
          ingredients: ['meat - 500g', 'garlic - 5g'],
          time: 35,
          views: 123,
        },
        {
          id: 3,
          title: 'Pancakes',
          image: 'images/pancakes.jpg',
          user_id: 2,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing ',
          directions: ['Take', 'Prepare', 'Cook'],
          ingredients: ['meat - 500g', 'garlic - 5g'],
          time: 25,
          views: 200,
        },
        {
          id: 4,
          title: 'Fresh meat with potato and cheeze ',
          image: 'images/freshmeatwithpotatoandcheeze.jpg',
          user_id: 1,
          description: 'Lorem ipsum dolor sit amet,',
          directions: ['Take', 'Prepare', 'Cook'],
          ingredients: ['meat - 500g', 'garlic - 5g'],
          time: 15,
          views: 212,
        },
        {
          id: 5,
          title: 'Fresh fruits',
          image: 'images/freshfruits.jpg',
          user_id: 4,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          directions: ['Take', 'Prepare', 'Cook'],
          ingredients: ['meat - 500g', 'garlic - 5g'],
          time: 10,
          views: 117,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipe', null, {});
  },
};