const router = require('express').Router();
const loginService = require('./login.service');

router.route('/').post(async (req, res) => {
  console.log(req.body.email, req.body.password);
  const token = await loginService.signToken(req.body.email, req.body.password);
  if (token) {
    console.log(token);
    res.json({ token });
  } else {
    res.status(403).send('Wrong username or password');
  }
});

module.exports = router;

