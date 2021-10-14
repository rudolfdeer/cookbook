const { cookbookRepository } = require('../data-access/repositories');

const getAll = async() => {
  const cookbooks = await cookbookRepository.getAll();
  return cookbooks;
}

const cookbookService = {
	getAll
}

module.exports = {
  cookbookService
}