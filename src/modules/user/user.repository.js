const User = require('./user.model');

const getAll = async () => {
  return await User.find();
};

const getOne = async (email) => {
  return await User.findOne({ email: email });
};

const getByProps = async (email, password) => {
  return await User.findOne({ email: email, password: password });
};

const add = async ({ email, password }) => {
  return await User.create({ email, password });
};

module.exports = { getAll, getOne, getByProps, add };

