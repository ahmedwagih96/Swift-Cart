const router = require('express').Router();
const { signup, signin, signout, refreshToken } = require('../controllers/auth.controller.js')
const { verifyRefreshToken } = require('../middleware/verifyToken.js')
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', verifyRefreshToken, signout);
router.get('/refresh', verifyRefreshToken, refreshToken);

module.exports = router