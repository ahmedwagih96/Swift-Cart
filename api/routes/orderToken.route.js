const router = require('express').Router();
const { verifyOrderToken } = require('../controllers/orderToken.controller.js');
const { VerifyTokenMiddleware } = require('../middleware')
router.get('/:orderToken', VerifyTokenMiddleware, verifyOrderToken);

module.exports = router