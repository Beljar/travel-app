const userRepo = require('../user/user.repository');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const signToken = async (email, password) => {
  const user = await userRepo.getByProps(email, password);
  console.log(user);
  if (user) {
    const { _id, email } = user;
    const token = jwt.sign({ _id, email }, SECRET_KEY);
    return token;
  } else {
    return null;
  }
}

module.exports = { signToken };
