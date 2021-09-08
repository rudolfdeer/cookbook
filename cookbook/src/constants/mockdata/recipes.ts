import { Recipe } from '../interfaces';

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Fresh meat',
    image: 'images/freshmeat.jpg',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: [
      {
        ingredient: 'meat',
        amount: '500g',
      },
      {
        ingredient: 'garlic',
        amount: '5g',
      },
    ],
    cookingTime: 60,
    views: 252,
    likes: 57,
    comments: [
      {
        user: 'John Galt',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'Patricia Holman',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 2,
    name: 'Pancakes new',
    image: 'images/pancakesnew.jpg',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: [
      {
        ingredient: 'flour',
        amount: '200g',
      },
      {
        ingredient: 'water',
        amount: '250ml',
      },
    ],
    cookingTime: 35,
    views: 123,
    likes: 17,
    comments: [
      {
        user: 'John Galt',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'Patricia Holman',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 3,
    name: 'Pancakes',
    image: 'images/pancakes.jpg',
    author: 'John Galt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: [
      {
        ingredient: 'flour',
        amount: '250g',
      },
      {
        ingredient: 'sugar',
        amount: '10g',
      },
    ],
    cookingTime: 25,
    views: 200,
    likes: 51,
    comments: [
      {
        user: 'John Galt',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'Patricia Holman',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 4,
    name: 'Fresh meat with potato and cheeze ',
    image: 'images/freshmeatwithpotatoandcheeze.jpg',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: [
      {
        ingredient: 'meat',
        amount: '500g',
      },
      {
        ingredient: 'potato',
        amount: '300g',
      },
    ],
    cookingTime: 15,
    views: 212,
    likes: 25,
    comments: [
      {
        user: 'John Galt',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'Patricia Holman',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'John Galt',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'Patricia Holman',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 5,
    name: 'Fresh fruits',
    image: 'images/freshfruits.jpg',
    author: 'Winston Smith',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: [
      {
        ingredient: 'apple',
        amount: '3',
      },
      {
        ingredient: 'banana',
        amount: '2',
      },
    ],
    cookingTime: 10,
    views: 117,
    likes: 15,
    comments: [
      {
        user: 'John Galt',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'Patricia Holman',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
      {
        user: 'John Galt',
        photo: 'images/user1.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
];

export default recipes;
