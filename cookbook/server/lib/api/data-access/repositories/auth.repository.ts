const { User } = require('../models');

type NewUserValues = {
  id: number;
  email: string;
  password: string;
};

const create = async (user: NewUserValues) => {
  const { id, email, password } = user;
  const userInstance = await User.create({
    id,
    email,
    password,
  });
  return userInstance;
};

const getByEmail = async (email: string) => {
  const userInstance = await User.findOne({
    where: {
      email,
    },
  });

  return userInstance;
};

module.exports = {
  create,
  getByEmail,
};
