export {}

const { cookbookModel } = require('../models');

const getAll = async () => {
  return cookbookModel.getAll()
}

const cookbookRepository = {
  getAll,
}

module.exports = {
  cookbookRepository
}