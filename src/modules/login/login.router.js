const router = require('express').Router();
const loginService = require('./login.service');

router.route('/').post(async (req, res) => {
  const token = await loginService.signToken(req.body.email, req.body.password);
  if (token) {
    res.status(200).send(token);
  } else {
    res.status(403).send('Wrong username or password');
  }
});

module.exports = router;

