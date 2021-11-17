'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          id: 1,
          name: 'Jonh Doe',
          photo: 'images/user1.png',
          email: 'johndoe@test.com',
          password: 'user1',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          id: 2,
          name: 'John Galt',
          photo: 'images/user1.png',
          email: 'johngalt@test.com',
          password: 'user2',
          bio: 'I don’t know about you but I love pizza. Especially when that pizza comes with Papa John’s very own garlic pizza sticks. ',
        },
        {
          id: 3,
          name: 'Patricia Holman',
          photo: 'images/user1.png',
          email: 'pholman@test.com',
          password: 'user3',
          bio: 'Dont like pizza',
        },
        {
          id: 4,
          name: 'Winston Smith',
          photo: 'images/user1.png',
          email: 'smith@test.com',
          password: 'user4',
          bio: 'Jaime Sushi',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};
