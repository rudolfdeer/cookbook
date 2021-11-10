import express from 'express';

const { userService } = require('../services');

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    await userService.deleteById(id);
    res.status(200).send('user deleted');
  } catch (err) {
    res.status(500).send(`error while deleting user: ${err}`);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const user = await userService.findById(id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(`error while finding user: ${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const user = req.body;
  const { id } = req.params;
  try {
    await userService.update(user, id);
    res.status(200).send('user updated');
  } catch (err) {
    res.status(500).send(`error while updating user: ${err}`);
  }
};

const userController = {
  deleteById,
  findById,
  update,
};

module.exports = {
  userController,
};
