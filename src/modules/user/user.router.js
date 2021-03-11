const router = require('express').Router();
const userService = require('./user.service');
const User = require('./user.model');

router.route('/').get(async (req, res) => {
  console.log('getAll');
  const users = await userService.getAll();
  console.log(users);
  res.json(users.map((user) => user.toResponse()));
});

router.route('/:email').get(async (req, res) => {
  const email = req.params.email;
  console.log(email);
  const user = await userService.getOne(email);
  console.log(user);
  res.json(user.toResponse());
});

module.exports = router;
