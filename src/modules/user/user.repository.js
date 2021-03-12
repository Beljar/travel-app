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

module.exports = { getAll, getOne, getByProps };

