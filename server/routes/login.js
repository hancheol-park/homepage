const express = require('express');
const router = express.Router();
const User = require('../models').User;
const auth = require('../auth');

/* LOGIN */
router.post('/', async function(req, res, next) {
  const { email, password } = req.body

  const user = await User.findOne({
    where: { email, password }
  })

  if (!user) return res.status(401).json({ error: '이메일 혹은 비밀번호가 틀립니다.' })

  const userName = user.name
  const accessToken = auth.signToken(user.id)
  res.json({ accessToken, userName})
});

module.exports = router;
