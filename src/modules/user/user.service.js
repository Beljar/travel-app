const userRepo = require('./user.repository');

const getAll = () => userRepo.getAll();

const getOne = (email) => userRepo.getOne(email);

module.exports = { getAll, getOne };
