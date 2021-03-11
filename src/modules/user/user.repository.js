const User = require('./user.model');

const getAll = async () => {
  return await User.find();
};

const getOne = async (email) => {
  return await User.findOne({ email: email });
};

module.exports = { getAll, getOne };
