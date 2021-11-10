const { User } = require('../models');

type NewUserValues = {
  email: string;
  password: string;
};

const createUser = async (data: NewUserValues) => {
  const { email, password } = data;
  const userInstance = await User.create({
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

const authRepository = {
  createUser,
  getByEmail,
};

module.exports = {
  authRepository,
};
