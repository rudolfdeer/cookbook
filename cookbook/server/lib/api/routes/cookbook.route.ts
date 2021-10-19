export {};

const express = require('express');
const { cookbookController } = require('../controllers');

const cookbookRouter = express.Router();

cookbookRouter.get('/', cookbookController.findAll);
cookbookRouter.post('/', cookbookController.create);
cookbookRouter.delete('/:id', cookbookController.deleteById);

module.exports = {
  cookbookRouter,
};

// {
//   id: 1,
//   image: 'images/cookbook-itsallaboutpancakes.jpg',
//   title: 'All about pancakes',
//   userId: 1,
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tempus viverra augue ac elit. Interdum libero at tristique fames faucibus. Massa a, consectetur et viverra vulputate urna enim felis metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque. Erat platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi, morbi maecenas facilisi.',
//   likes: 259,
//   usersLiked: [1, 3, 4],
//   views: 459,
//   comments: [
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.'],
//   recipesIds: [1, 4, 5],
//   tags: ['Without eggs', 'Without milk'],
// },

// {
//   "id": "1",
//   "image": "images/cookbook-itsallaboutpancakes.jpg",
//   "title": "All about pancakes",
//   "userId": "1",
//   "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tempus viverra augue ac elit. Interdum libero at tristique fames faucibus. Massa a, consectetur et viverra vulputate urna enim felis metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque. Erat platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi, morbi maecenas facilisi.",
//   "likes": "259",
//   "usersLiked": [1, 3, 4],
//   "views": 459,
//   "comments": [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat."],
//   "recipesIds": [1, 4, 5],
//   "tags": ["Without eggs", "Without milk"]
// }
