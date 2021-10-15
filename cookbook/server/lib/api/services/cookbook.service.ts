export {};

const { cookbookRepository } = require('../data-access/repositories');

const findAll = async () => {
  const cookbooks = await cookbookRepository.findAll();
  return cookbooks;
};

const cookbookService = {
  findAll,
};

module.exports = {
  cookbookService,
};
