const router = require('express').Router();
const { signup, signin, signout, refreshToken } = require('../controllers/auth.controller.js')
const { VerifyRefreshTokenMiddleware } = require('../middleware')
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', VerifyRefreshTokenMiddleware, signout);
router.get('/refresh', VerifyRefreshTokenMiddleware, refreshToken);

module.exports = router