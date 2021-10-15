export {};

const { Cookbook } = require('../models');

const findAll = () => {
  return Cookbook.findAll();
};

const cookbookRepository = {
  findAll,
};

module.exports = {
  cookbookRepository,
};
