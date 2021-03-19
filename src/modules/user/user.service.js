const userRepo = require('./user.repository');

const getAll = () => userRepo.getAll();

const getOne = (email) => userRepo.getOne(email);

const add = ({ email, password }) => userRepo.add({ email, password });

module.exports = { getAll, getOne, add };
