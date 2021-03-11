const { Schema, model } = require('mongoose');

const user = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

user.methods.toResponse = function () {
  const { _id, email } = this.toObject();
  return { _id, email };
};

const User = model('User', user);

module.exports = User;
